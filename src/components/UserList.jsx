import React from 'react';
import UserProfile from './UserProfile';

const UserList = ({ users, onDelete }) => {
  return (
    <div
      className="user-list"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {users.map((user) => (
        <UserProfile key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UserList;
