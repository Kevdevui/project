import React from 'react';
import { Link } from 'react-router-dom';
import JewelsImg from '../assets/images/jewels.jpg';
import './GalleryItem.css';

export default function GalleryItem({
  img = JewelsImg,
  title = 'Gallery Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <div className="galItems">
      <Link to="/gallery" className="galleryItem__img">
        <img src={img} alt="gallery img" />
      </Link>
      <div className="galleryItem__info">
        <Link to="#">
          <h3 className="galleryItem__title">{title}</h3>
        </Link>
        <p className="galleryItem__desc">{desc}</p>
      </div>
    </div>
  );
}
