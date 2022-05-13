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

export const CurrencyButton = styled.div`
  display: inline-block;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const CartButton = styled.div`
  display: inline-block;
  margin-left: 22px;
  margin-top: 6px;
  vertical-align: top;
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

export const Arrow = styled.img`
  vertical-align: middle;
  margin-left: 8px;
`;

export const Cart = styled.img``;

export const SpaceHolder = styled.div`
  flex-grow: 2;
  flex-shrink: 1;
`;

export const CurrencySelector = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  position: absolute;
  width: 114px;
  height: 170px;
  background: #ffffff;
  padding: 15px 0;
  right: 85px;
  box-shadow: 0px 4px 35px 0px #a8acb030;
`;

export const CurrencyOption = styled.div`
  text-align: left;
  height: 45px;
  width: 100%;
  padding: 8px 20px;
  font-family: Raleway-Medium;
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
  background: ${(props) => (props.selected ? '#eeeeee' : '#ffffff')};
  &:hover {
    background: #eeeeee;
    cursor: pointer;
  }
`;

export const CoverLayer = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  position: fixed;
  right: 0;
  top: 80px;
  z-index: 1;
  width: 100%;
  height: calc(100% - 80px);
  background: #39374838;
`;
