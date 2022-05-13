import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  display: flex;
  border-top: 1px solid #e5e5e5;
  padding: 24px 0;
`;
export const ProductName = styled.div`
  font-family: Raleway;
  font-size: 30px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
`;
export const ProductBrand = styled.div`
  font-family: Raleway-SemiBold;
  font-size: 30px;
  line-height: 27px;
  text-align: left;
  margin-bottom: 16px;
`;
export const ProductOptions = styled.div`
  text-transform: uppercase;
  font-family: RobotoCondensed-Bold;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 16px;
`;
export const ProductOptionsTitle = styled.div`
  margin-bottom: 7px;
`;
export const ProductTextOption = styled.div`
  display: inline-block;
  min-width: 63px;
  height: 45px;
  padding: 13px;
  border: 1px solid #1d1f22;
  font-family: Source Sans Pro, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-align: center;
  color: ${(props) => (props.selected ? '#ffffff' : '#292929')};
  background: ${(props) => (props.selected ? '#1D1F22' : '#FFFFFF')};
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:hover {
    cursor: pointer;
    background-color: #1d1f22;
    color: #ffffff;
  }
`;

export const ProductSwatchOption = styled.div`
  display: inline-block;
  width: 34px;
  height: 34px;
  padding: 2px;
  background: ${(props) => props.color};
  background-clip: content-box;
  border: ${(props) => (props.selected ? '1px solid #5ECE7B' : '1px solid #ffffff')};
  &(:first-child) {
    margin-left: -2px;
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid #5ece7b;
  }
`;

export const ProductPrice = styled.div`
  margin-bottom: 20px;
  font-family: Raleway-Bold;
  font-size: 24px;
  line-height: 18px;
`;

export const ProductInfo = styled.div`
  min-width: 400px;
  flex-grow: 2;
`;

export const ProductImage = styled.div`
  flex-shrink: 2;
  height: 288px;
  width: 200px;
  margin-left: 24px;
  background-image: url(${(props) =>
    props.imageUrl ||
    'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 16px;
  text-align: right;
  border: 1px solid #e3e3e3;
`;

export const Arrow = styled.img`
  margin-left: 8px;
  vertical-align: bottom;
  margin-top: 232px;
  &:hover {
    cursor: pointer;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 288px;
`;

export const ChangeQuantity = styled.div`
  width: 45px;
  height: 45px;
  text-align: center;
  background: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #e8e8e8;
    color: #ffffff;
  }
`;

export const QuantityNumber = styled.div`
  width: 45px;
  text-align: center;
  font-family: Raleway-Medium;
  font-size: 24px;
  line-height: 38px;
`;
