import styled from 'styled-components';

export const CurrencySelector = styled.div`
  display: ${(props) => (props.display === 'true' ? 'block' : 'none')};
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
