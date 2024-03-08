import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './component/header';
import Login from './component/login';
import SecondPage from './component/signUpPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



/*    <div className="App">
      <Header />
      < Login /> 
    </div>*/