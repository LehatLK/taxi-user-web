import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './myprofile.css';

function MyProfile() {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '', 
    phone: '', 
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);  

  useEffect(() => {
    // Fetch profile picture logic
  }, []);

  const handleChange = (e) => {
    // Handle input changes
  };

  const handleProfilePictureChange = (e) => {
    // Handle profile picture changes
  };

  const handleProfileUpdate = async (event) => {
    // Handle profile update
  };

  return (
    <div className="profile-container">
      <h1>Min Profil</h1>
      <form onSubmit={handleProfileUpdate}>
        <div className="profile-picture">
          <img src={profilePictureUrl || 'default_profile_picture_link'} alt="Profile" />
          {/* Updated the class name here */}
          <input id="file-upload" type="file" onChange={handleProfilePictureChange} className="fileSelectorButton" style={{display: 'none'}} />
          {/* Adjusted the button to act as a label for the file input */}
          <label htmlFor="file-upload" className="file-upload-button">Välj profilbild</label>
        </div>

        <div className="user-info">
          <label htmlFor="username">Användarnamn:</label>
          <input
            id="username"
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleChange}
          />
        </div>

        <div className="user-info">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        </div>

        <div className="user-info">
          <label htmlFor="phone">Telefon:</label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="profile-button">Uppdatera profil</button>
      </form>
    </div>
  );
}

export default MyProfile;
