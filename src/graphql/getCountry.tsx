import { gql } from '@apollo/client';

export interface CountryData {
  country: {
    name: string;
    native: string;
    capital: string;
    emoji: string;
    currency: string;
    languages: {
      code: string;
      name: string;
    };
  };
}

export interface CountryVar {
  code: string;
}

const getCountry = gql`
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

export default getCountry;
