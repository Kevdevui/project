import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import GalleryItem from './GalleryItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import gallerys from '../assets/data/galleryData';
import './GallerySection.css';

SwiperCore.use([Navigation]);

export default function GallerySection() {
  // console.log(gallerys);
  return (
    <div className="galSection">
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Gallery" />
        <div className="gallery__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {/* in this section the swiper goes up to 5 images thatw ill be displayed */}
            {/* as seen below it get the data from galleryData */}
            {gallerys.map((gallery, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={gallery.id}>
                  <GalleryItem
                    title={gallery.name}
                    img={gallery.img}
                    desc={gallery.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
