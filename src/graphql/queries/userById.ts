import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query getUserById($userId: Int!) {
    oneUser(userId: $userId) {
      id
      name
      age
    }
  }
`;
