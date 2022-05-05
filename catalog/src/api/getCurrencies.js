import { gql } from '@apollo/client';

const CURRENCIES_QUERY = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export default CURRENCIES_QUERY;
