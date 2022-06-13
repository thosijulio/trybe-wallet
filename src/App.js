import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';


class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={ <Login /> } />
        </Routes>
    )
  }
}

export default App;
