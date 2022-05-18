import styled from 'styled-components';

export const ProductInfoWrapper = styled.div`
  width: 292px;
  flex-grow: 2;
`;

export const ProductBrand = styled.p`
  font-family: Raleway-SemiBold;
  font-size: 30px;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const ProductName = styled.p`
  font-family: Raleway;
  font-size: 30px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0;
  margin-bottom: 43px;
`;

export const ProductOptions = styled.div`
  text-transform: uppercase;
  font-family: RobotoCondensed-Bold;
  font-size: 18px;
  line-height: 18px;
`;

export const ProductTextOption = styled.div`
  display: inline-block;
  min-width: 63px;
  height: 45px;
  margin-top: 8px;
  margin-bottom: 24px;
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
  margin-top: 6px;
  margin-bottom: 34px;
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

export const ProductOptionsTitle = styled.p`
  margin: 0;
`;

export const ProductPrice = styled.p`
  margin-top: 15px;
  margin-bottom: 20px;
  font-family: Raleway-Bold;
  font-size: 24px;
  line-height: 18px;
`;

export const ProductDescription = styled.div`
  max-height: 180px;
  overflow-y: auto;
  font-family: Roboto;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  padding-right: 5px;
`;

export const AddToCartButton = styled.button`
  padding: 16px 32px;
  width: 292px;
  height: 52px;
  background: #5ece7b;
  font-family: Raleway-SemiBold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: #ffffff;
  margin-bottom: 40px;
  &:hover {
    background: #1d1f22;
    cursor: pointer;
  }
  &:disabled {
    background: #ddd;
    cursor: auto;
  }
`;
