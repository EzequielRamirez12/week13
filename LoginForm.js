import React from 'react';

function LoginForm() {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
