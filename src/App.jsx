import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { useNavigate } from 'react-router-dom';

function App() {
  const [hideLoginForm, setHideLoginForm] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    setHideLoginForm((show) => !show);
  }

  function handleAboutClick() {
    navigate('/about');
  }
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              handleClick={handleClick}
              hideLoginForm={hideLoginForm}
              handleAboutClick={handleAboutClick}
            />
          }
        />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
