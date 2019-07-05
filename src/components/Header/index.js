import React from 'react';

import {
  Header, HeaderContent, HeaderContainer, Logo, UserInfo, ShoppingCartButton, Icon, Badge,
} from './styles';

const HeaderComponent = () => (
  <Header>
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <h1>Don Juan Pizzeria</h1>
      </HeaderContent>
      <HeaderContent>
        <UserInfo>
          <span>Diego Fernandes</span>
          <button type="button">Logout</button>
        </UserInfo>
        <ShoppingCartButton>
          <Icon />
          <Badge />
        </ShoppingCartButton>
      </HeaderContent>
    </HeaderContainer>
  </Header>
);

export default HeaderComponent;
