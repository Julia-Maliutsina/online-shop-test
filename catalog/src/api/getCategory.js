import { gql } from '@apollo/client';

const CATEGORY_QUERY = gql`
  query Category($category: String!) {
    category(input: { title: $category }) {
      products {
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
        attributes {
          name
          items {
            value
          }
        }
        inStock
      }
    }
  }
`;

export default CATEGORY_QUERY;
