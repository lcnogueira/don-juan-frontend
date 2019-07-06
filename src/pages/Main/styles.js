import styled from 'styled-components';

import { colors } from 'styles';

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  flex: 1;
  max-width: 800px;
  padding-top: 30px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
`;

export const OrderCard = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 8px 5px ${colors.lighterTransparent};
  transition: 0.3s;
  
  &:hover {
    box-shadow: 0 0 16px 10px ${colors.lighterTransparent};
  }
  
  h3{
    font-size: 18px;
    color: ${colors.primary};
    font-weight: 400;
    margin-bottom: 5px;

    span{
      font-size: 18px;
      color: ${colors.primary};
      font-weight: bold;
    }
  }

  > span{
    display: block;
    font-size: 11px;
    color: ${colors.gray};
    letter-spacing: 0;
    line-height: 14px;
    margin-bottom: 5px;
  }

  h4{
    font-size: 16px;
    color: ${colors.primary};
    letter-spacing: 0;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: ${colors.gray};
    letter-spacing: 0;

    span{
      font-weight: bold;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  border-bottom: 1px solid ${colors.border};
  border-top: 1px solid ${colors.border};
  margin: 20px 0;
  padding: 10px 0;
`;

export const Item = styled.div`
  display: flex;
  width: 238px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  padding: 15px;
  margin: 10px 15px 10px 0;
  
  &:last-child{
    margin-right: 0;
  }

  img{
    margin-right: 10px;
    max-width: 60px;
    max-height: 60px;
  }
`;

export const ItemInfo = styled.div` 

  h5 {
    font-size: 13px;
    color: ${colors.primary};
    letter-spacing: 0;
    font-weight: 400;
    margin-top: 5px;
  }

  span {
    font-size: 11px;
    color: ${colors.gray};
    letter-spacing: 0;
    line-height: 10.77px;
  }
`;
