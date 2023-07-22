import { gql } from '@apollo/client';

export const GET_USERS_ALL = gql`
  query {
    users {
      id
      name
      age
    }
  }
`;
