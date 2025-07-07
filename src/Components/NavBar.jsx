const NavBar = ({ handleAboutClick, handleClick }) => {
  return (
    <div className='navbar'>
      <h1>Foodkart</h1>
      <ul className='nav'>
        <li>Home</li>
        <li onClick={handleAboutClick}>About</li>
        <li onClick={handleClick}>Login</li>
      </ul>
    </div>
  );
};

export default NavBar;
