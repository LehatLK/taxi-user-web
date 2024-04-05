import React, { useState } from 'react';
import axios from 'axios';
import './myprofile.css';

function MyProfile() {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '', // I've assumed 'favoriteColor' was meant to be 'email'
    phone: '', // 'subscriptionLevel' is assumed to be 'phone'
  });
  const [profilePicture, setProfilePicture] = useState(null);

  // Handles changes in the username input
  const handleUsernameChange = (e) => {
    setProfileData({ ...profileData, username: e.target.value });
  };

  // Handles changes in the email input
  const handleEmailChange = (e) => {
    setProfileData({ ...profileData, email: e.target.value });
  };

  // Handles changes in the phone input
  const handlePhoneChange = (e) => {
    setProfileData({ ...profileData, phone: e.target.value });
  };

  // Handles the file selection for the profile picture
  const handleProfilePictureChange = (e) => {
    if (e.target.files.length > 0) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Handles the profile picture upload
  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    if (!profilePicture) {
      alert('Please select a profile picture to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', profilePicture);

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post('http://localhost:3000/api/user-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });

      // Handle the response...
      console.log(response.data);
      alert('Profile picture updated successfully!');
    } catch (error) {
      // Handle errors...
      console.error('Error updating profile picture:', error);
      alert('An error occurred while updating the profile picture.');
    }
  };




  // ... inside MyProfile component after the function declarations
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <form onSubmit={handleProfileUpdate}>
        <div className="profile-picture">
          <img src={profilePicture || 'default_profile_picture_link'} alt="Profile" />
          <input type="file" onChange={handleProfilePictureChange} />
        </div>

        <div className="user-info">
          <label htmlFor="username">Användarnamn:</label>
          <input
            id="username"
            type="text"
            value={profileData.username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className="user-info">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={profileData.email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="user-info">
          <label htmlFor="phone">Telefon:</label>
          <input
            id="phone"
            type="text"
            value={profileData.phone}
            onChange={handlePhoneChange}
          />
        </div>

        <button type="submit" className="profile-button">Uppdatera profil</button>
      </form>
    </div>
  );

  }
export default MyProfile; 
