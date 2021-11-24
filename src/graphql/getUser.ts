import { gql } from '@apollo/client';

const getUser = gql`
  query getUser {
    user @rest(type: "User", path: "users/me") {
      id
      userUid
      username
    }
  }
`;

export default getUser;
