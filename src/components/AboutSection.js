import React from 'react';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/groupA.jpg';
import './AboutSection.css';
import './SectionTitle.css';

// This section is contains the information for the about section on the home page

export default function AboutSection() {
  return (
    <div className="aboutStyle">
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            // className="section-title"
            subheading="Who we are & What we do"
            heading="About Lifestyle"
          />
          <PText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
            nunc non blandit massa enim nec dui nunc. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Molestie nunc non blandit massa
            enim nec dui nunc.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="View Gallery" btnLink="/gallery" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </div>
  );
}
