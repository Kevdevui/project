import React from 'react';

import HeroImg from '../assets/images/hero3.jpg';
import Button from './Button';
import SocialArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';
import './HeroSection.css';
import './PText.css';

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__heading">
          <span>Welcome to</span>
          <span className="hero__name">LifeStyle Photographs</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            We are freelance photographers and bloggers thats been working
            together for 7 years. We love to create and make new experiences for
            the people, eitheir sad or happy moments, we are the people for you.
          </PText>
          <Button btnText="Photo Gallery" btnLink="/gallery" />
        </div>
        <div className="hero__social">
          <div className="hero__social__indicator">
            <p>Follow</p>
            <img src={SocialArrow} alt="icon" />
          </div>
          <div className="hero__social__text">
            <ul>
              <li>
                <a
                  href="https://github.com/Kevdevui"
                  target="_blank"
                  rel="noreferrer"
                >
                  GH
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/kevinajcabey"
                  target="_blank"
                  rel="noreferrer"
                >
                  CP
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kevintheone91/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IG
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kevin-cabey-03a45510a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__scrollDown">
          <p>Scroll</p>
          <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
        </div>
      </div>
    </div>
  );
}
