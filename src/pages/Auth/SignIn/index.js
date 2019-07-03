import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from 'store/ducks/auth';

import Button from 'styles/components/Button';
import { Container, SignForm } from './styles';

function SignIn({ signInRequest, history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    signInRequest(email, password);
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Welcome</h1>

        <span>E-MAIL</span>
        <input type="email" name="email" email={email} onChange={e => setEmail(e.target.value)} />

        <span>PASSWORD</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button size="big" type="submit">
          Sign In
        </Button>
        <Button size="big" color="gray" onClick={() => history.push('/signup')}>
          Sign up
        </Button>
      </SignForm>
    </Container>
  );
}

SignIn.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
