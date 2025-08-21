import React from 'react';
import { useUsers } from '../../references/useUsersRef';

const UserList: React.FC = () => {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isLoading) return <div>Loading users...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
