import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrdersActions from 'store/ducks/orders';

import Header from 'components/Header';
import {
  ContentContainer, InnerContainer, Title, OrderCard, ItemsContainer, Item, ItemInfo,
} from './styles';


class Main extends Component {
  static propTypes = {
    loadOrdersRequest: PropTypes.func.isRequired,
    orders: PropTypes.shape({
    }).isRequired,
  }

  componentDidMount() {
    const { loadOrdersRequest } = this.props;
    loadOrdersRequest();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <ContentContainer>
          <InnerContainer>
            <Title>Recent orders</Title>
            <OrderCard>
              <h3>
                Pedido
                <span> #3 </span>
                - Diego Schell Fernandes
              </h3>
              <span>há 2 segundos</span>
              <h4>$42.00</h4>
              <ItemsContainer>
                <Item>
                  <img src="https://rocketfinalchallenge.s3.amazonaws.com/k3.891ksdmjc-1.png" alt="Pizza Calabresa" />
                  <ItemInfo>
                    <h5>Pizza Calabresa</h5>
                    <span>Tamanho: Média</span>
                  </ItemInfo>
                </Item>
                <Item>
                  <img src="https://rocketfinalchallenge.s3.amazonaws.com/k3.891ksdmjc-1.png" alt="Pizza Calabresa" />
                  <ItemInfo>
                    <h5>Pizza Calabresa</h5>
                    <span>Tamanho: Média</span>
                  </ItemInfo>
                </Item>
                <Item>
                  <img src="https://rocketfinalchallenge.s3.amazonaws.com/coca%401x.png" alt="Pizza Calabresa" />
                  <ItemInfo>
                    <h5>Pizza Calabresa</h5>
                    <span>Tamanho: Média</span>
                  </ItemInfo>
                </Item>
              </ItemsContainer>
              <p>
                <span>Observações: </span>
                Favor remover o tomate da pizza
              </p>
            </OrderCard>
          </InnerContainer>
        </ContentContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ orders }) => ({
  orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
