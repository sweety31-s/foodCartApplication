import React, { useState } from 'react';

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  function handleClick() {}
  return (
    <div className='navbar'>
      <h1>Foodkart</h1>
      <ul className='nav'>
        <li>Home</li>
        <li>About</li>
        <li onClick={handleClick}>Login</li>
      </ul>
    </div>
  );
};

export default NavBar;
