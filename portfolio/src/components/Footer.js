import React from "react";
import "./Footer.css";
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome style={{ color: "#fff", marginRight: "2rem" }} size={20} />
            <div>
              <p>Location 123</p>
              <p>City, State, Country</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />1-2345-8696
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />nexusconnectpro@gmail.com
            </h4>
          </div>
        
        </div>
        <div className="right">

          <h4>About</h4>

          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="social">
          <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              

          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
