import { gql } from '@apollo/client';

const inserUser = gql`
  mutation Insert_users($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        name
        id
      }
    }
  }
`;

export default inserUser;
