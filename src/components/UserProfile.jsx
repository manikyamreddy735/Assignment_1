import React, { useState } from 'react';

const UserProfile = ({ user, onDelete }) => {
  const [liked, setLiked] = useState(false);
  const avatarUrl = `https://api.dicebear.com/6.x/bottts/svg?seed=${user.username}`;

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div
      style={{
        backgroundColor: liked ? '#ffe6f1' : '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '20px',
        width: '320px',
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      }}
    >
      <img
        src={avatarUrl}
        alt={`${user.name}'s avatar`}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          marginBottom: '15px',
          border: '2px solid #ddd',
        }}
        onError={(e) => (e.target.src = 'https://via.placeholder.com/100')}
      />
      <h2 style={{ color: '#333', marginBottom: '10px', fontSize: '20px' }}>{user.name}</h2>
      <p style={{ color: '#555', fontSize: '14px', marginBottom: '5px' }}>
        <strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
      <p style={{ color: '#555', fontSize: '14px', marginBottom: '5px' }}>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p style={{ color: '#555', fontSize: '14px', marginBottom: '5px' }}>
        <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '15px',
        }}
      >
        <button
          style={{
            ...buttonStyle,
            color: liked ? '#e74c3c' : '#666',
          }}
          onClick={handleLike}
        >
          &#9829;
        </button>
        <button
          style={buttonStyle}
          onClick={() => alert('Edit feature not implemented yet!')}
        >
          &#9998;
        </button>
        <button style={buttonStyle} onClick={() => onDelete(user.id)}>
          &#128465;
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  color: '#666',
};

export default UserProfile;
