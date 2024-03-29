import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkToProduct = styled(Link)`
  justify-self: center;
  width: 386px;
`;

export const ItemWrapper = styled.div`
  padding: 16px;
  height: 444px;
  &:hover {
    box-shadow: 0px 4px 35px 0px #a8acb030;
    cursor: pointer;
  }
`;

export const ItemImage = styled.div`
  position: relative;
  height: 330px;
  width: 354px;
  background-image: url(${(props) =>
    props.imageUrl ||
    'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ItemName = styled.div`
  font-family: Raleway-Light;
  font-size: 18px;
  line-height: 29px;
  color: #1d1f22;
  margin-top: 24px;
`;

export const ItemPrice = styled.div`
  font-family: Raleway-Medium;
  font-size: 18px;
  line-height: 29px;
  color: #1d1f22;
`;

export const AddToCart = styled.img`
  position: absolute;
  z-index: 5;
  bottom: -37px;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const OutOfStock = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 444px;
  background: #ffffff;
  opacity: 0.5;
  text-align: center;
  padding: 150px 0;
  color: #8d8f9a;
  font-family: Raleway;
  font-size: 24px;
  line-height: 38px;
  text-transform: uppercase;
`;
