import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from 'store/ducks/auth';

import {
  Header, HeaderContent, HeaderContainer, Logo, UserInfo, ShoppingCartButton, Icon, Badge,
} from './styles';

const HeaderComponent = ({ signOut, ordersAmount }) => (
  <Header>
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <h1>Don Juan Pizzeria</h1>
      </HeaderContent>
      <HeaderContent>
        <UserInfo>
          <span>Diego Fernandes</span>
          <button type="button" onClick={() => signOut()}>Logout</button>
        </UserInfo>
        <ShoppingCartButton>
          <Icon />
          <Badge>{ordersAmount}</Badge>
        </ShoppingCartButton>
      </HeaderContent>
    </HeaderContainer>
  </Header>
);

HeaderComponent.propTypes = {
  signOut: PropTypes.func.isRequired,
  ordersAmount: PropTypes.number.isRequired,
};

const mapStateToProps = ({ orders }) => ({
  ordersAmount: orders.data.length > 0 ? orders.data.length : 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent);
