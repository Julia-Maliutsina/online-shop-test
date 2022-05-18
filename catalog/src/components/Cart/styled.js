import styled from 'styled-components';

export const OrderInfo = styled.div`
  border-top: 1px solid #e5e5e5;
  padding-top: 32px;
`;

export const OrderButton = styled.div`
  height: 43px;
  width: 279px;
  padding: 13px;
  color: #ffffff;
  text-align: center;
  font-family: Raleway-SemiBold;
  font-size: 14px;
  line-height: 17px;
  background: #5ece7b;
  text-transform: uppercase;
  margin-top: 16px;
  &:hover {
    background: #1d1f22;
    cursor: pointer;
  }
`;

export const OrderInfoBlock = styled.div`
  color: #1d1f22;
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
`;

export const OrderInfoTitle = styled.span`
  display: inline-block;
  font-family: Raleway;
  margin-right: 3px;
  width: 110px;
`;

export const OrderInfoNumber = styled.span`
  display: inline-block;
  font-family: Raleway-Bold;
  min-width: 110px;
`;

export const EmptyCart = styled.div`
  font-family: Raleway-Bold;
  font-size: 16px;
  text-align: left;
`;
