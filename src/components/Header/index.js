import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from 'store/ducks/auth';

import {
  Header, HeaderContent, HeaderContainer, Logo, UserInfo, ShoppingCartButton, Icon, Badge,
} from './styles';

const HeaderComponent = ({ signOut }) => (
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
          <Badge />
        </ShoppingCartButton>
      </HeaderContent>
    </HeaderContainer>
  </Header>
);

HeaderComponent.propTypes = {
  signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(HeaderComponent);
