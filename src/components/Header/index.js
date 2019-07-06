import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from 'store/ducks/auth';

import {
  Header, HeaderContent, HeaderContainer, Logo, UserInfo, ShoppingCartButton, Icon, Badge,
} from './styles';

const HeaderComponent = ({ signOut, ordersAmount, userName }) => (
  <Header>
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <h1>Don Juan Pizzeria</h1>
      </HeaderContent>
      <HeaderContent>
        <UserInfo>
          <span>{userName}</span>
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
  userName: PropTypes.string,
};

HeaderComponent.defaultProps = {
  userName: null,
};

const mapStateToProps = ({ orders, auth }) => ({
  ordersAmount: orders.data.length > 0 ? orders.data.length : 0,
  userName: auth.user && auth.user.name,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent);
