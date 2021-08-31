import React from 'react';
import FooterCol from './FooterCol';
import PText from './PText';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footStyle">
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">LifeStyle Photographs</h1>
          <PText>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Molestie nunc non blandit massa enim nec dui nunc. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Molestie nunc non
              blandit massa enim nec dui nunc.
              <strong>"Lorem Ipsum"</strong>
            </span>
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Navigation"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Gallery',
                path: '/gallery',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+00000000',
                path: 'tel:+00000000',
              },
              {
                title: 'lifestyle@gmail.com',
                path: 'mailto:lifestyle@gmail.com',
              },
              {
                title: 'MayFair, London, United Kingdom',
                path: 'https://bit.ly/3yfi5Pp',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            <span>
              © 2021 - Birkbeck Web Project | Designed By{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Kevdevui"
              >
                Kevin Cabey
              </a>{' '}
            </span>
          </PText>
        </div>
      </div>
    </div>
  );
}
