import { FC } from 'react';
import Button from '../../../stories/Button';

interface Props {
  user: { id: number; name: string; age: string };
}

const UsersListItem: FC<Props> = ({ user }) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <Button>Delete</Button>
    </div>
  );
};

export default UsersListItem;
