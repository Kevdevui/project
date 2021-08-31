import React from 'react';
import { MdPlace } from 'react-icons/md';
import PText from './PText';
import './ContactInfoItem.css';

// this section contains the information for the photographer, which is the number, email and the address

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <div className="ciStyle">
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </div>
  );
}
