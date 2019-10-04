import React from 'react';

export default function LoginView(props) {

  function login(event)
  {
    event.preventDefault();
    props.onLoginSubmit(event.target['username'].value, event.target['password'].value)
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
       Please give your username and password to login
      </div>

      <form onSubmit={ login }>
        <div>
          Username <input type="text" name="username" />
        </div>
        <div>
          Password <input type="text" name="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>



    </div>
  )
}
