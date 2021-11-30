import { gql } from '@apollo/client';

const getUser = gql`
  query getUser {
    me {
      id
      userUid
      username
    }
  }
`;

export default getUser;
