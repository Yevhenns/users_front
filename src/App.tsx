import { FC, useState, useEffect } from 'react';
import Input from './stories/Input';
import './App.css';
import Button from './stories/Button';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS_ALL } from './graphql/queries/user';
import { ADD_NEW_USER } from './graphql/mutations/user';

const App: FC = () => {
  const { data: dataQuery, loading } = useQuery(GET_USERS_ALL);
  const [newUser, { data }] = useMutation(ADD_NEW_USER);

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await newUser({
        variables: {
          contacts: { name, age }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!loading) {
      setUsers(dataQuery.users);
    }
  }, [dataQuery, loading]);

  console.log(dataQuery, data);

  return (
    <>
      <form onSubmit={(e) => addUser(e)}>
        <div className='formWrapper'>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
          <Input value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' />
        </div>
        <div className='buttonWrapper'>
          <Button type='submit'>Add</Button>
          <Button>Delete</Button>
          <Button>Find</Button>
        </div>
      </form>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.age}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
