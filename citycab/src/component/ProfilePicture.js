import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePicture.css';

function ProfilePicture() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  useEffect(() => {
    fetchAndDisplayProfilePicture();
  }, []);

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

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePicture(file);
      setProfilePictureUrl(URL.createObjectURL(file));
    }
  };

  const handleProfilePictureUpload = async (e) => {
    e.preventDefault();
    if (!profilePicture) {
      alert('Please select a profile picture to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', profilePicture);
    const token = localStorage.getItem('userToken');
    try {
      await axios.post('https://91fd-90-230-123-227.ngrok-free.app/user/update-image', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profile picture updated successfully!');
    } catch (error) {
      console.error('Error updating profile picture:', error);
      alert('An error occurred while updating the profile picture.');
    }
  };

  return (
    <div className="profile-picture-container">
      <img className="profile-image" src={profilePictureUrl || 'default_profile_picture.png'} alt="Profile" />
      <input
        id="file-upload"
        type="file"
        onChange={handleProfilePictureChange}
        className="file-upload-input"
        accept="image/*"
      />
      <label htmlFor="file-upload" className="file-upload-button" onClick={handleProfilePictureUpload}>
        Upload New Photo
      </label>
    </div>
  );
}

export default ProfilePicture;

