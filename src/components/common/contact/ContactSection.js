import React from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Title } from "../index";
import ContactForm from "./ContactForm";
import "./styles/contact.scss";

const ContactSection = () => {
  return (
    <div className="contact-section-wrapper">
      <div className="contact-section-card">
        <div className="contact-card-left">
          <ContactForm target="contactSection" />
        </div>

        <div className="contact-card-right-wrapper">
          <div className="contact-card-right">
            <Title title="" subTitle="Contact us" accent={false} />
            <div className="contact-icon-wrapper">
              <div className="icon-wrapper">
                <MdLocationOn className="location" />
              </div>
              <div className="icon-title">
                1st Floor, VR Chambers, Outer Ring Road, Kadubisinahalli,
                Marathalli, Bangalore - 560103
              </div>
            </div>

            <div className="contact-icon-wrapper">
              <div className="icon-wrapper">
                <FaPhoneAlt className="phone" />
              </div>
              <span>+91 80941 56781</span>
            </div>

            <div className="contact-icon-wrapper">
              <div className="icon-wrapper">
                <MdEmail className="email" />
              </div>
              <span>support@sunatechnosoft.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
