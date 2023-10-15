import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/Bi";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import letterpost from "../assets/contactt.gif";
import "../styles/Contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container-contact">
        <div className="content">
          <h1> Get In Touch</h1>
          <h3>
            <BsFillTelephoneFill />
            <em> +91 9518855820</em>
          </h3>
          <h3>
            <BiLogoGmail /> vishu17185@gmail.com
          </h3>
          <h3>
            <BsLinkedin />
            <a href="https://www.linkedin.com/in/vishalyadav1314" style={{ textDecoration: "none" , color: "darkblue" }}>
               
              Linkedin
            </a>
          </h3>
          <h3>
            <BsFillGeoAltFill />
            Haryana, India
          </h3>
          <p> © 2023 Designed and Built by Vishal Yadav</p>
        </div>

        <img src={letterpost}></img>
      </div>
    </div>
  );
}
