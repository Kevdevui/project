import React from 'react';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/groupB.jpg';
import ContactBanner from '../components/ContactBanner';
import './About.css';

export default function About() {
  return (
    <>
      <div className="apStyle">
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, We are <span>LifeStyle Photographs</span>
              </p>
              <h2 className="about__heading">Photographers of LifeStyle</h2>
              <div className="about__info">
                <PText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Molestie nunc non blandit massa enim nec dui nunc.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Molestie
                  nunc non blandit massa enim nec dui nunc.
                  <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Molestie nunc non blandit massa enim nec dui nunc.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Molestie nunc non blandit massa enim nec dui nunc.
                </PText>
              </div>
              <Button btnText="Photo Gallery" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
        </div>
        <ContactBanner />
      </div>
    </>
  );
}
