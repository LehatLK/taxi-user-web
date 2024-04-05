  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import './myprofile.css';

  function MyProfile() {
    const [profileData, setProfileData] = useState({
      username: '',
      favoriteColor: '',
      subscriptionLevel: '',
    });
    const [profilePicture, setProfilePicture] = useState(null);

    const handleUsernameChange = (e) => {
      setProfileData({ ...profileData, username: e.target.value });
    };


    const handleProfilePictureChange = (e) => {
      if (e.target.files.length > 0) {
        // Skapa en URL för den valda filen
        const fileURL = URL.createObjectURL(e.target.files[0]);
        setProfilePicture(fileURL);
      }
    };


    return (
      <div className="profile-container">
        <h1>My Profile</h1>
        <div>
          {/* Profilbild */}
          <div className="profile-picture">
            <img src={profilePicture || 'https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'} alt="Profile" />
            <input type="file" onChange={handleProfilePictureChange} />
          </div>

          {/* Användarnamn */}
          <div className="user-info">
            <label htmlFor="username">Användarnamn:</label>
            <input
              id="username"
              type="text"
              value={profileData.username}
              onChange={handleUsernameChange}
            />
          </div>

          {/* Färg */}
          <div className="user-info">
            <label htmlFor="favoriteColor">Email:</label>
            <input
              id="favoriteColor"
              type="text"
              value={profileData.favoriteColor}
              onChange={(e) => setProfileData({ ...profileData, favoriteColor: e.target.value })}
            />
          </div>

          {/* Prenumerationsnivå */}
          <div className="user-info">
            <label htmlFor="subscriptionLevel">telefon:</label>
            <input
              id="subscriptionLevel"
              type="text"
              value={profileData.subscriptionLevel}
              onChange={(e) => setProfileData({ ...profileData, subscriptionLevel: e.target.value })}
            />
          </div>

          {/* En knapp för att spara de nya uppgifterna kan läggas till här */}
          <button className="profile-button">Uppdatera profil</button>
        </div>
      </div>
    );
  }

  export default MyProfile;
