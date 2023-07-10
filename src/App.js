import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Start from './components/Start'
import Form1 from './components/Form1'
import Logo from './components/Logo';
import Form2 from './components/Form2'

function App() {
  return (
    <div className="App">
      <Router>
          <Logo />
          <Routes>
            <Route path="/" Component= {Start} />
            <Route path="/login" Component= {Login} />
            <Route path="/loged/form1" Component= {Form1} />
            <Route path="/loged/form2" Component= {Form2} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
