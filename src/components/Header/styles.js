import styled from 'styled-components';

import { colors } from 'styles';

import logo from 'assets/images/logo.svg';
import shoppingIcon from 'assets/images/shopping-bag-solid.svg';

export const Header = styled.header`
  background-color: ${colors.primary};
  height: 80px;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  height: 100%;
  max-width: 1070px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    margin-left: 14px;
    font-size: 18px;
    color: ${colors.white};
    letter-spacing: 0;
    font-weight: bold;
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  color:${colors.white};
  width:32px;
  height:32px;
`;

export const UserInfo = styled.div`
  padding-right: 20px;
  border-right: 0.5px solid ${colors.lighter};
  text-align: right;

  span{
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
  }

  button{
    color: ${colors.white};
    background: none;
    border: none;
    font-size: 14px;
    opacity: 0.6;
  }
`;

export const ShoppingCartButton = styled.button`
  background-color: ${colors.secondary};
  border: ${colors.secondary};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  position: relative;
`;

export const Icon = styled.img.attrs({
  src: shoppingIcon,
})`
  color: ${colors.white};
  width: 16px;
  height: 16px;
`;

export const Badge = styled.span`
  display: block;
  text-align: center;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #FFC108;
`;
