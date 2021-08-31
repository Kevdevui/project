import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <div className="csStyle">
      <div className="container">
        <SectionTitle
          heading="contact"
          subheading="Feel free to get in touch"
        />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+00000000" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="goodlifestyle@gmail.com"
            />
            <ContactInfoItem text="MayFair, London, United Kingdom" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
