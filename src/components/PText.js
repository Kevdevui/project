import React from 'react';
import './PText.css';

export default function PText({ children }) {
  return (
    <div className="pStyle">
      <p>{children}</p>
    </div>
  );
}
