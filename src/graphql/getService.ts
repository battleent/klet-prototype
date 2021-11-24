import { gql } from '@apollo/client';

const getService = gql`
  query getService {
    services @rest(type: "Services", path: "services") {
      id
      name
      logoImageId
      contractAddress
    }
  }
`;

export default getService;
