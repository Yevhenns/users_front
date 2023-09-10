import { FC, useState, useEffect } from 'react';
import Input from './stories/Input';
import './App.css';
import Button from './stories/Button';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS_ALL } from './graphql/queries/usersAll';
import { ADD_NEW_USER } from './graphql/mutations/user';
// import { GET_USER_BY_ID } from './graphql/queries/userById';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UsersList from './components/usersList/UsersList';

const App: FC = () => {
  const [users, setUsers] = useState([]);

  const { data: dataQuery, loading } = useQuery(GET_USERS_ALL);
  // const { data: byIdQuery, loading: byIdLoading } = useQuery(GET_USER_BY_ID);
  const [newUser, { data }] = useMutation(ADD_NEW_USER);

  const schema = yup.object({
    name: yup.string().required(),
    age: yup.string().required(),
  });
  type FormData = yup.InferType<typeof schema>;

  const defaultValues: FormData = {
    name: '',
    age: '',
  };

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormData> = async ({ name, age }) => {
    try {
      await newUser({
        variables: {
          userInfo: { name, age },
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      if (!loading) {
        setUsers(dataQuery.users);
      }
    }
  };

  useEffect(() => {
    if (!loading) {
      setUsers(dataQuery.users);
    }
  }, [dataQuery, loading]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formWrapper">
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input placeholder="Name" {...field} />}
          />
          <Controller
            name="age"
            control={control}
            render={({ field }) => <Input placeholder="Age" {...field} />}
          />
        </div>
        <div className="buttonWrapper">
          <Button type="submit">Add</Button>
          <Button>Find</Button>
        </div>
      </form>
      <UsersList users={users} />
    </>
  );
};

export default App;
