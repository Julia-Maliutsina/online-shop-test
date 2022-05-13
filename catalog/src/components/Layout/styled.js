import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: 160px 100px 10px 100px;
`;

export const Title = styled.p`
  font-family: ${(props) => (props.pagename === 'cart' ? 'Raleway-Bold' : 'Raleway')};
  font-size: ${(props) => (props.pagename === 'cart' ? '32px' : '42px')};
  line-height: 67px;
  color: #1d1f22;
  margin-top: 0;
  margin-bottom: ${(props) => (props.pagename === 'cart' ? '55px' : '119px')};
  text-transform: ${(props) => (props.pagename === 'cart' ? 'uppercase' : 'capitalize')};
`;
