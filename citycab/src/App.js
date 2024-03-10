import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './component/header';
import Login from './component/login';
import SecondPage from './component/signUpPage';
import Mapp from './component/mapp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/mapp" element={<Mapp />} />
          {/* <Route path="/map" element={<Map />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

