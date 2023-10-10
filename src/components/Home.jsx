import React from "react";
import { BsDownload,BsLinkedin } from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

import img from "../assets/my-img.jpg";
import "../styles/Home.scss";
export default function Home() {
  return (
    <div className="home bg-pan-left" id="home">
    <div>
         <div className="hometext">
        <p>Welcome to my world ... I'm</p>
        <h1 >Vishal Yadav</h1>
        <h3 style={{color:"rgb(231, 90, 90)"}}>Full Stack Developer</h3>
        <button className="btn">Resume</button>
        <button className="icon">
          <BsDownload />
        </button>
      </div>
      <div className="home-img wobble-hor-bottom">
        <div >
          <img  className="bounce-in-top" src={img} />
        </div>
      </div>
     
    </div> 
     <button className="git"><a href="#"><FaGithub/></a></button>
    <button className="link"><a href="https://www.linkedin.com/in/vishalyadav1314"><BsLinkedin/></a></button>
    </div>
  );
}
