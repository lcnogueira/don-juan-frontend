import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import AuthActions from 'store/ducks/auth';

import {
  Container, SignForm, Button, Logo,
} from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(AuthActions.signInRequest(email, password));
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
