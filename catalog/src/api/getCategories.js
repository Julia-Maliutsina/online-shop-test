import { gql } from '@apollo/client';

const CATEGORIES_QUERY = gql`
  query {
    categories {
      name
    }
  }
`;

export default CATEGORIES_QUERY;
