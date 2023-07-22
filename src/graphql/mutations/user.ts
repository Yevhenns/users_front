import { gql } from '@apollo/client';

export const ADD_NEW_USER = gql`
  mutation createUserMutation($userInfo: createUserInput!) {
    createUser(userInfo: $userInfo) {
      id
      name
      age
    }
  }
`;
