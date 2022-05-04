import styled from 'styled-components';

export const MenuWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: flex-start;
  padding: 29px 100px 0px 100px;
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

export const Currency = styled.img``;

export const Arrow = styled.img`
  vertical-align: text-top;
`;

export const Cart = styled.img``;

export const SpaceHolder = styled.div`
  flex-grow: 2;
  flex-shrink: 1;
`;
