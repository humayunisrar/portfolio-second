import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome style={{ color: "#fff", marginRight: "2rem" }} size={20} />
            <div>
              <p>Karachi, PK</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +92 336 3204705
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              nexusconnectpro@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          
        <div className='cv-download'>
  <h4>Download CV</h4>
  <a href="https://drive.google.com/file/d/1dZHSjX6gpoCvHFNum4kP79QwjcbCwiUh/view?usp=sharing" download>
    <button className="btn">Download</button>
  </a>
</div>
          <div className="social">
            <a href="https://github.com">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://www.linkedin.com/in/humayun-israr-466276218/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/humayunisrar">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
          
        </div>
        <p>&copy; 2024 Nexus.</p>
      </div>
    </div>
  );
};

export default Footer;
