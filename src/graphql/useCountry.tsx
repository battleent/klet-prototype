import { gql } from '@apollo/client';

const useCountry = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

export default useCountry;
