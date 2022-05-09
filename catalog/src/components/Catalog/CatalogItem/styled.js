import styled from 'styled-components';

export const ItemWrapper = styled.div`
  padding: 16px;
  height: 444px;
  &:hover {
    box-shadow: 0px 4px 35px 0px #a8acb030;
    cursor: pointer;
  }
`;

export const ItemImage = styled.div`
  height: 338px;
  width: 356px;
  background-image: url(${(props) =>
    props.imageUrl ||
    'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ItemName = styled.div`
  font-family: Raleway-Light;
  font-size: 18px;
  line-height: 29px;
  color: #1d1f22;
  margin-top: 24px;
`;

export const ItemPrice = styled.div`
  font-family: Raleway-Medium;
  font-size: 18px;
  line-height: 29px;
  color: #1d1f22;
`;
