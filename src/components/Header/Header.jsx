import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header>
      <button onClick={onLogout}>Log Out</button>
    </header>
  );
};

export default Header;
