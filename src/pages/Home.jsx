import React from 'react';
import NavBar from '../Components/NavBar';
import Login from './Login';

const Home = ({ hideLoginForm, handleClick, handleAboutClick }) => {
  return (
    <div>
      <NavBar handleClick={handleClick} handleAboutClick={handleAboutClick} />
      <Login hideLoginForm={hideLoginForm} handleClick={handleClick} />
    </div>
  );
};

export default Home;
