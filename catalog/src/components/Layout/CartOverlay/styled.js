import styled from 'styled-components';

export const CartPopUpList = styled.div`
  display: ${(props) => (props.display === 'true' ? 'block' : 'none')};
  height: content-fit;
  max-height: calc(100vh - 90px);
  width: 325px;
  padding: 32px 16px;
  background: #fff;
  position: absolute;
  right: 85px;
  top: 80px;
  text-align: left;
`;

export const CartPopUpTitle = styled.p`
  margin: 0;
  display: inline;
  font-family: Raleway-Bold;
  color: #1d1f22;
  font-size: 16px;
  line-height: 25px;
`;

export const CartPopUpQuantity = styled.p`
  margin: 0;
  display: inline;
  font-family: Raleway-Medium;
  color: #1d1f22;
  font-size: 16px;
  line-height: 25px;
`;

export const CartPopUpItems = styled.div`
  min-height: 200px;
  max-height: calc(100vh - 350px);
  overflow-y: auto;
  margin: 32px 0;
`;

export const TotalPrice = styled.div`
  height: 25px;
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 25px;
  color: #1d1f22;
  display: flex;
  justify-content: space-between;
`;

export const TotalPriceTitle = styled.p`
  display: inline;
  margin: 0;
  font-family: Roboto-Medium;
`;

export const TotalPriceNumber = styled.p`
  display: inline;
  margin: 0;
  font-family: Raleway-Bold;
`;

export const ViewBagButton = styled.button`
  padding: 13px 32px;
  width: 140px;
  height: 43px;
  background: #ffffff;
  border: 1px solid #1d1f22;
  color: #1d1f22;
  font-family: Raleway-SemiBold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background: #1d1f22;
    color: #ffffff;
  }
`;

export const CheckOutButton = styled.button`
  padding: 13px 0;
  width: 140px;
  height: 43px;
  background: #5ece7b;
  color: #fff;
  font-family: Raleway-SemiBold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  margin-left: 12px;
  &:hover {
    cursor: pointer;
    background: #1d1f22;
  }
`;
