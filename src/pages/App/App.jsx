import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Auth from '../components/Auth';
import Header from './components/Header';


import './App.css';

export default function App() {
  const [user, setUser ] = useState(getUser());
  console.log(user)

  const handleLogin = (credentials) => {
    setIsLoggedIn(true);
  };

  const handleSignup = (data) => {
    setIsLoggedIn(true);
  };

  const handelLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSubmit = (data) => {
    };

  return (
  <Router>
    <div className="App">
    {isLoggedIn && <Header onLogout={handleLogout} />}
    <Switch>
    <Route path="/login">
    {isLoggedIn ? <Redirect to="/" /> : <Auth onLogin={handleLogin} onSignup={handleSignup} />}
    </Route>
      <NavBar user={ user } setUser={ setUser } />
      <Routes>
        <Route path="/orders/new" element={ <NewOrderPage />}/>
        <Route path="/orders" element={ <OrderHistoryPage />}/>
      </Routes>
      <AuthPage setUser={ setUser } />
    </Switch>
    </div>
  </Router>
    
  );
}


