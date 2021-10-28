import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import pinterest from "../../assets/icons/pinterest.png";
import linkedIn from "../../assets/icons/linkedIn.png";
import "./styles/Footer.scss";

const Footer = () => {
  const socialMedias = [
    {
      id: 1,
      icon: facebook,
      link: "/",
    },
    {
      id: 2,
      icon: twitter,
      link: "/",
    },
    {
      id: 3,
      icon: pinterest,
      link: "/",
    },
    {
      id: 4,
      icon: linkedIn,
      link: "/",
    },
  ];

  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="item section-1">
          <h1 className="brand">Suna Technosoft</h1>
          <p className="footer-company-info">
            Cras in nibh iaculis, imperdiet ipsum ut, congue nulla. Donec cursus
            egestas ante, sed faucibus felis congue quis.
          </p>

          <div className="social-media-wrapper">
            {socialMedias.map((item) => (
              <a href={item.link} key={item.id}>
                <div className="social-media">
                  <img src={item.icon} alt="social-media-icon" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="item">
          <h3>Company</h3>

          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Courses</Link>
            </li>
            <li>
              <Link to="/">IT Solutions</Link>
            </li>
            <li>
              <Link to="/">Outsourcing</Link>
            </li>
            <li>
              <Link to="/">Internship</Link>
            </li>
          </ul>
        </div>

        <div className="item">
          <h3>Resources</h3>

          <ul>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Awards</Link>
            </li>
            <li>
              <Link to="/">Our Instructor</Link>
            </li>
            <li>
              <Link to="/">Investors</Link>
            </li>
            <li>
              <Link to="/">Partner with us</Link>
            </li>
          </ul>
        </div>

        <div className="item">
          <h3>Contact Info</h3>
          <div className="contact-wrapper">
            <span className="bold">Address: </span>
            <span>7 Division St, New York, NY 10002, USA</span>
          </div>
          <div className="contact-wrapper">
            <span className="bold">Phone: </span>
            <span>+91 9922 8866 2233</span>
          </div>
          <div>
            <span className="bold">Email: </span>
            <span>email@sunatech.com</span>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright &#169; Suno Technosoft. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
