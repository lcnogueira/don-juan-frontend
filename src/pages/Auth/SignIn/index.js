import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from 'store/ducks/auth';

import {
  Container, SignForm, Button, Logo,
} from './styles';

function SignIn({ signInRequest }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    signInRequest(email, password);
  }

  return (
    <Container>
      <Logo />
      <SignForm onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          email={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
          placeholder="Your e-mail"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          placeholder="Secret password"
        />
        <Button type="submit">
          Sign In
        </Button>
      </SignForm>
    </Container>
  );
}

SignIn.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
