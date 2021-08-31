import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <div className="secTitle">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </div>
  );
}
