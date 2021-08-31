import React from 'react';
import { Link } from 'react-router-dom';
import './Botton.css';

// button component

export default function Button({ btnText = 'test', btnLink = 'test' }) {
  return (
    <div className="buttonStyle">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </div>
  );
}
