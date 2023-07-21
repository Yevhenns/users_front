import { gql } from '@apollo/client';

export const ADD_NEW_USER = gql`
  mutation createUserMutation($contacts: createUserInput!) {
    createUser(contacts: $contacts) {
      id
      name
      age
    }
  }
`;
