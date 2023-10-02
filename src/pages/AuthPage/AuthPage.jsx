import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';
import { signUp } from '../../utilities/users-api';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  console.log(showSignUp)
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LogInForm setUser={setUser} />
      }
    </main>
  );
}