import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Login from './component/login';
import SecondPage from './component/signUpPage';
import Mapp from './component/mapp';
import MyProfile from './component/myprofile'; 
import MyTrips from './component/mytrips';
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
          <Route path="/mytrips" element={<MyTrips />} />
          <Route path="/myprofile" element={<MyProfile />} /> {/* Lägg till denna rad */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
