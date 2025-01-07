import React, { useEffect, useState } from 'react';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f7f9fc',
        }}
      >
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: '#f7f9fc',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '30px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        User Profiles
      </h1>
      <UserList users={users} onDelete={handleDelete} />
    </div>
  );
};

export default App;
