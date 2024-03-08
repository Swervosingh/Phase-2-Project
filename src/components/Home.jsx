import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  const headingStyle = {
    fontSize: '40px',
    textAlign: 'center',
    color: 'white',
  };

  return (
    <div>
      <h1 style={headingStyle}>Welcome to NBA Trivia </h1>
    
      {/* Home button */}
      <Link to="/" style={buttonStyle}>
        Home
      </Link>
    </div>
  );
};

export default Home;

