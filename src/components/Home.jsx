import React from "react";
import { BsDownload,BsLinkedin } from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import{Typewriter} from "react-simple-typewriter"

import img from "../assets/my-img.jpg";
import "../styles/Home.scss";
export default function Home() {
  return (
    <div className="home bg-pan-left" id="home">
    <div>
         <div className="hometext">
        <p>Welcome to my world ... I'm</p>
        <h1 style={{fontFamily:"Gabarito"}}>Vishal Yadav</h1>
        <h3 style={{color:"rgb(231, 90, 90)"}}>
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          <Typewriter
            words={['MERN Stack Developer', 'Coder', 'Problem Solver', 'Quick Learner']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </span>
        
        </h3>
        <button className="btn">Resume</button>
        <button className="icon" >
          <BsDownload />
        </button>
      </div>
      <div className="home-img wobble-hor-bottom">
        <div >
          <img  className="bounce-in-top" src={img} />
        </div>
      </div>
     
    </div> 
     <button className="git"><a href="https://github.com/VishalYadav1311"><FaGithub/></a></button>
    <button className="link"><a href="https://www.linkedin.com/in/vishalyadav1314"><BsLinkedin/></a></button>
    </div>
  );
}
