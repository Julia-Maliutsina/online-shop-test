import { gql } from '@apollo/client';

const PRODUCT_QUERY = gql`
  query Product($productId: String!) {
    product(id: $productId) {
      id
      name
      brand
      gallery
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      inStock
      description
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;

export default PRODUCT_QUERY;
