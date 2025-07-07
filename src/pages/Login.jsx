import React from 'react';

const Login = () => {
  return (
    <>
      <div className='input-body'>
        <form action='' className='login-body'>
          <h2>Login</h2>
          <input type='text' placeholder='Email' className='input' />
          <input type='password' placeholder='Password' className='input' />
          <button className='login-btn'>Login</button>
          <p>
            Not a member ? <a href='#'>Sign up</a>
          </p>
        </form>
      </div>
      <div></div>
    </>
  );
};

export default Login;
