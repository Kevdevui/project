import React from 'react';
import Button from './Button';
import PText from './PText';
import './ContactBanner.css';

// this section contains the information for the contact banner

export default function ContactBanner() {
  return (
    <div className="cbStyles">
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Want to collab with us,</PText>
          <h3 className="contactBanner__heading">Click the button below.</h3>
          <Button btnText="Contact Us Now" btnLink="/contact" />
        </div>
      </div>
    </div>
  );
}
