import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #1d1f22;
`;

export const ProductGallery = styled.div`
  flex-shrink: 1;
  flex-grow: 0;
  max-height: calc(100vh - 170px);
  overflow-y: auto;
  width: 105px;
  margin-left: -5px;
  padding-left: 5px;
  margin-top: -5px;
  padding-top: 5px;
  text-align: center;
`;

export const ProductGalleryItem = styled.div`
  height: 80px;
  width: 80px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 32px;
  &:hover {
    box-shadow: 0px 0px 3px 4px #a8acb030;
    cursor: pointer;
  }
  &:last-child {
    margin-bottom: 10px;
  }
`;

export const ProductImage = styled.div`
  flex-shrink: 2;
  flex-grow: 1;
  max-height: 511px;
  width: 610px;
  margin-left: 40px;
  margin-right: 100px;
  background-image: url(${(props) =>
    props.imageUrl ||
    'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;
