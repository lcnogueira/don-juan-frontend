import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import AuthActions from 'store/ducks/auth';

import {
  Header, HeaderContent, HeaderContainer, Logo, UserInfo, ShoppingCartButton, Icon, Badge,
} from './styles';

export default function HeaderComponent() {
  const ordersAmount = useSelector(({ orders }) => (orders.data.length > 0 ? orders.data.length : 0));
  const userName = useSelector(({ auth }) => auth.user && auth.user.name);
  const dispatch = useDispatch();
  return (
    <Header>
      <HeaderContainer>
        <HeaderContent>
          <Logo />
          <h1>Don Juan Pizzeria</h1>
        </HeaderContent>
        <HeaderContent>
          <UserInfo>
            <span>{userName}</span>
            <button type="button" onClick={() => dispatch(AuthActions.signOut())}>Logout</button>
          </UserInfo>
          <ShoppingCartButton>
            <Icon />
            <Badge>{ordersAmount}</Badge>
          </ShoppingCartButton>
        </HeaderContent>
      </HeaderContainer>
    </Header>
  );
}
