import { FC, useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import './App.css';

import { GET_USERS_ALL } from './graphql/queries/usersAll';
// import { GET_USER_BY_ID } from './graphql/queries/userById';
import { ADD_NEW_USER } from './graphql/mutations/user';
// import { REMOVE_USER } from './graphql/mutations/removeUser';

import UsersList from './components/usersList/UsersList';
import Form from './components/Form/Form';

interface User {
  id: number;
  name: string;
  age: string;
}

interface Users {
  users: User[];
}

const App: FC = () => {
  const [usersArr, setUsersArr] = useState([]);

  const { data: dataAllUsers, loading } = useQuery<Users>(GET_USERS_ALL);
  // const { data: dataById, loading: byIdLoading } =
  //   useQuery<User>(GET_USER_BY_ID);

  const [newUser, { data: dataNewUser, loading: newUserLoading }] =
    useMutation<User>(ADD_NEW_USER);
  // const { data: dataDeleteUser, loading: deleteUserLoading } =
  //   useMutation(REMOVE_USER);

  const addNewUser = async (name: string, age: string) => {
    try {
      await newUser({
        variables: {
          userInfo: { name, age },
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      if (!loading && dataAllUsers.users !== undefined) {
        setUsersArr(dataAllUsers.users);
      }
    }
  };

  useEffect(() => {
    if (!loading && dataAllUsers !== undefined) {
      setUsersArr(dataAllUsers.users);
    }
  }, [dataAllUsers, loading]);

  return (
    <>
      <Form addNewUser={addNewUser} />
      <UsersList users={usersArr} />
    </>
  );
};

export default App;
