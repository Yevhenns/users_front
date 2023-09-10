import { FC } from 'react';
import UsersListItem from './UsersListItem/UsersListItem';

interface Props {
  users: {
    id: number;
    name: string;
    age: string;
  }[];
}

const UsersList: FC<Props> = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UsersListItem user={user} />
      ))}
    </div>
  );
};

export default UsersList;
