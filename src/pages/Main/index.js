import React, { useEffect } from 'react';
import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux';
import OrdersActions from 'store/ducks/orders';

import Header from 'components/Header';
import {
  ContentContainer, InnerContainer, Title, OrderCard, ItemsContainer, Item, ItemInfo,
} from './styles';


export default function Main() {
  const orders = useSelector(state => state.orders.data.map(order => ({
    number: order.id,
    user: order.user.name,
    time: moment(order.created_at).fromNow(),
    price: order.items.reduce((total, item) => total + (item.quantity * item.typeSize.price), 0),
    items: order.items.length && order.items.map(item => ({
      id: item.id,
      image: item.typeSize.type.file.url,
      name: `${item.typeSize.type.product.name} ${item.typeSize.type.name}`,
      size: item.typeSize.size.name,
    })),
    note: order.note,
  })));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OrdersActions.loadOrdersRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ContentContainer>
        <InnerContainer>
          <Title>Recent orders</Title>
          {orders.map(order => (
            <OrderCard key={order.number}>
              <h3>
                Order
                <span>{` #${order.number} `}</span>
                -
                {` ${order.user}`}
              </h3>
              <span>{order.time}</span>
              <h4>{`$${order.price.toFixed(2)}`}</h4>
              <ItemsContainer>
                {order.items.map(item => (
                  <Item key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <ItemInfo>
                      <h5>{item.name}</h5>
                      <span>{`Size: ${item.size}`}</span>
                    </ItemInfo>
                  </Item>
                ))}
              </ItemsContainer>
              <p>
                <span>Observações: </span>
                {order.note}
              </p>
            </OrderCard>
          ))}
        </InnerContainer>
      </ContentContainer>
    </>
  );
}
