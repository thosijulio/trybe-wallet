import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';


class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route element={ <Wallet /> } path="/carteira" />
          <Route element={ <Login /> } exact path="/" />
        </Routes>
    )
  }
}

export default App;
