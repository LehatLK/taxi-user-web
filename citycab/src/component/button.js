import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import './button.css'
const BookRideButton = () => {
  return (
    <button className="book-a-ride">
      <FontAwesomeIcon icon={faTaxi} /> Book a ride
    </button>
  );
};

export default BookRideButton;
