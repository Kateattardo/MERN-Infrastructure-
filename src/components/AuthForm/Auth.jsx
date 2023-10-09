import React, { useState } from 'react';

export default function AuthForm({ setUser })
  const Auth = ({ onLogin, onSignup}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit= (e) => {
      e.preventDefault();
      if (isLogin) {
        onLogin({ email, password});
      } else {
        onSignup({ name, email, password });
      }
    };

    return (
      <div>
      <h2>{isLogin ? 'Login' : 'Sign up' }</h2>
      <form onSubmit={handleSubmit}>
      {!isLogin && (
        <div>
        <label>Name:</label>
        <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        />
      </div>
      )}
      <div> 
      <label>Email:</label>
      <input
      type="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      />
    </div>
    <div>
    <label>Password:</label>
    <input
    type="password"
    value={password}
    onChange={e => setPassword(e.target.value)}
    />
    </div>
    <button type="submit">{isLogin ? 'Login' : 'Sign up'}</button>
</form>

<button onClick={() => setIsLogin(prevState => !prevState)}>
Switch to {isLogin ? 'Sign Up' : 'Login'}
</button>
</div>
    );
  };
  export default Auth;