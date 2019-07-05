import styled from 'styled-components';

import { colors } from 'styles';

import background from 'assets/images/signin_background.png';
import logo from 'assets/images/logo.svg';

export const Container = styled.div`
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(${colors.darkTransparent},${colors.darkerTransparent}), url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  width:72px;
  height:72px;
  margin-bottom: 20px;
`;


export const SignForm = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  input {
    background-color: ${colors.white};
    border: 1px solid ${colors.darkTransparent};
    border-radius: 10px;
    height: 50px;
    padding: 25px;
    margin-top: 10px;
    transition: border 0.15s ease;
    font-size: 16px;
    color: ${colors.light};

    &:focus {
      border-color: ${colors.secondary};
    }
  }
  button {
    margin: 15px 0 0;
  }
`;

export const Button = styled.button`
  background: ${colors.secondary};
  border: 0;
  border-radius: 10px;
  height: 50px;
  transition: background-color 0.15s ease;
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0;
  font-weight: bold;

  &:hover {
    background: #a43d3d;
  }
`;
