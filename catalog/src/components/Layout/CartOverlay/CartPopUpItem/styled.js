import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 40px;
  }
`;
export const ProductName = styled.div`
  font-family: Raleway-Light;
  font-size: 16px;
  line-height: 25px;
  text-align: left;
  margin-bottom: 4px;
`;
export const ProductBrand = styled.div`
  font-family: Raleway-Light;
  font-size: 16px;
  line-height: 25px;
  text-align: left;
  margin-bottom: 10px;
`;
export const ProductOptions = styled.div`
  font-family: Raleway;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 8px;
`;
export const ProductOptionsTitle = styled.div`
  margin-bottom: 8px;
`;
export const ProductTextOption = styled.div`
  display: inline-block;
  min-width: 24px;
  height: 24px;
  padding: 1px;
  border: 1px solid #1d1f22;
  font-family: Source Sans Pro, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-align: center;
  color: ${(props) => (props.selected ? '#ffffff' : '#292929')};
  background: ${(props) => (props.selected ? '#1D1F22' : '#FFFFFF')};
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const ProductSwatchOption = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  padding: 1px;
  background: ${(props) => props.color};
  background-clip: content-box;
  border: ${(props) => (props.selected ? '1px solid #5ECE7B' : '1px solid #ffffff')};
  &(:first-child) {
    margin-left: -2px;
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const ProductPrice = styled.div`
  margin-bottom: 8px;
  font-family: Raleway-Medium;
  font-size: 16px;
  line-height: 25px;
`;

export const ProductInfo = styled.div`
  width: 136px;
  flex-grow: 2;
  text-align: left;
`;

export const ProductImage = styled.div`
  flex-shrink: 2;
  height: 190px;
  width: 120px;
  margin-left: 8px;
  background-image: url(${(props) =>
    props.imageUrl ||
    'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 190px;
`;

export const ChangeQuantity = styled.div`
  width: 24px;
  height: 24px;
  text-align: center;
  background: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #e8e8e8;
    color: #ffffff;
  }
`;

export const QuantityNumber = styled.div`
  width: 24px;
  text-align: center;
  font-family: Raleway-Medium;
  font-size: 16px;
  line-height: 25px;
`;
