// I din myprofile.js fil i component-mappen
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './myprofile.css'; // Ställ in dina stilregler här

function MyProfile() {
  const [profileData, setProfileData] = useState({
    username: '',
    details: {},
    metrics: {},
    status: {},
    settings: {},
  });

  useEffect(() => {
    async function fetchProfileData() {
      try {
        const response = await axios.get('https://api-g36q5boh2q-uc.a.run.app/api/user-profile');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }

    fetchProfileData();
  }, []);

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div>
        <div className="user-name">{profileData.username}</div>
        <div className="user-info">Favorite Color: {profileData.details.favoriteColor}</div>
        <div className="user-info">Subscription Level: {profileData.details.subscriptionLevel}</div>
        {/* Render more user info as needed */}
      </div>
      {/* Add more elements to display other profile details */}
    </div>
  );
}

export default MyProfile;
