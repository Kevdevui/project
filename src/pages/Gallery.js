import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import GalleryInfo from '../assets/data/galleryData';
import GalleryItem from '../components/GalleryItem';
import './Gallery.css';

export default function Gallery() {
  const [searchText, setSearchText] = useState('');
  const [galleryData, setGalleryData] = useState(GalleryInfo);
  useEffect(() => {
    if (searchText === '') return;
    setGalleryData(() =>
      GalleryInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setGalleryData(GalleryInfo);
    }
  };
  return (
    <>
      <div className="galStyle">
        <div className="container">
          <SectionTitle heading="Gallery" subheading="Most recent work" />
          <div className="gallery__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Gallary Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="gallery__allItems">
            {galleryData.map((item) => (
              <GalleryItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
