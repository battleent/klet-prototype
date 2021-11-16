import { gql } from '@apollo/client';

const useUser = gql`
  query Users($where: users_bool_exp) {
    users(where: $where) {
      id
      name
      timestamp
    }
  }
`;

export default useUser;
