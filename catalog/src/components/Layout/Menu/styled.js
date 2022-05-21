import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: flex-start;
  padding: 29px 100px 0px 100px;
  z-index: 15;
  background: #fff;
  box-shadow: 0 0px 7px 1px #e3e3e3;
`;

export const SpaceHolder = styled.div`
  flex-grow: 2;
  flex-shrink: 1;
`;

export const MenuCategories = styled.div`
  width: 234px;
  font-family: 'Raleway';
  font-size: 16px;
  text-transform: uppercase;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const MenuCategory = styled.div`
  height: 51px;
  padding: 0px 16px;
  margin-right: 4px;
  display: inline-block;
  color: ${(props) => (props.selected ? '#5ece7b' : '#1d1f22')};
  border-bottom: ${(props) => (props.selected ? '2px solid #5ece7b' : 'none')};
  &:hover {
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  flex-grow: 1;
  flex-shrink: 0;
  height: 41px;
  margin-top: -5px;
`;

export const Actions = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  text-align: right;
`;

export const Arrow = styled.img`
  vertical-align: middle;
  margin-left: 8px;
`;

export const CurrencyButton = styled.div`
  display: inline-block;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const Currency = styled.span`
  font-family: Raleway-Medium;
  font-size: 18px;
  line-height: 29px;
  text-align: left;
`;

export const CartButton = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 22px;
  margin-top: 6px;
  vertical-align: top;
  &:hover {
    cursor: pointer;
  }
`;

export const Cart = styled.img``;

export const CartBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1d1f22;
  color: #ffffff;
  font-family: Roboto-Bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  padding-top: 2px;
`;
