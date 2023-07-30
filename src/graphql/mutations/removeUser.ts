import { gql } from '@apollo/client';

export const REMOVE_USER = gql`
  mutation removeUserMutation($userId: Int!) {
    removeUser(userId: $userId)
  }
`;
