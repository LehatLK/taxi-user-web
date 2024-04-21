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
    async function fetchAndDisplayProfilePicture() {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('No token found. User must be logged in to fetch profile picture.');
        return;
      }

      try {
        const response = await axios.get('https://aa70-90-230-123-227.ngrok-free.app/user/profile-image', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          responseType: 'blob'
        });

        const imageUrl = URL.createObjectURL(response.data);
        setProfilePictureUrl(imageUrl);
      } catch (error) {
        console.error('Fetch Profile Picture Error:', error);
      }
    }

    fetchAndDisplayProfilePicture();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePicture(file);
      setProfilePictureUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileUpdate = async (event) => {
    event.preventDefault();

    if (!profilePicture) {
      alert('Please select a profile picture to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', profilePicture);
    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.post('https://91fd-90-230-123-227.ngrok-free.app/user/update-image', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Profile picture updated successfully!');
      setProfilePictureUrl(URL.createObjectURL(profilePicture));
    } catch (error) {
      console.error('Error updating profile picture:', error);
      alert('An error occurred while updating the profile picture.');
    }
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Min Profil</h1>
      <form onSubmit={handleProfileUpdate}>
        <div className="profile-picture">
          <img src={profilePictureUrl || 'default_profile_picture_link'} alt="Profile" />
          <label htmlFor="file-upload" className="file-upload-button">Välj profilbild</label>
          <input
            id="file-upload"
            type="file"
            onChange={handleProfilePictureChange}
            className="file-upload-input"
            accept="image/*" 
          />
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
