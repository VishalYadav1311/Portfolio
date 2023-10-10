import React from "react";
import { useState } from "react";
import Expdiv from "../subcomponents/Expdiv";
import "../styles/About.scss";
import gif from "../assets/unscreen.gif"

export default function About() {
  const [value, setValue] = useState("about");
  // const btns=document.getElementsByClassName('btns');

  function activebtn(e){
    const ele = document.getElementsByClassName("activeabout");
    console.log(ele);
    for (let i of ele) {
      i.className = i.className.replace("activeabout", " ");
    }
    e.target.className += "activeabout";
  }
  function handleclickexp(e) {
    if (value === "experience") {
      return;
    }
    setValue("experience");
    activebtn(e);
  }
  function handleclickabout(e) {
    if (value === "about") {
      return;
    }
     setValue("about");
     activebtn(e);
  }
 


  return (
    <div className="about" id="about">
      <h1>All <span style={{color:"rgb(231, 90, 90)"}}>About</span> Me & My <span  style={{color:"rgb(231, 90, 90)"}}>Experience</span></h1>
      <div className="btns">
        <button className="activeabout" onClick={handleclickabout} >About</button>
        <button className="" onClick={handleclickexp}>Experience</button>
      </div>
      <div className="container">
        
          <img src={gif}></img>
         
        {value === "about" ? (
          <div className="about-div" >
            <p>
              Hello! My name is Vishal Yadav & I enjoy creating things that
              live on the internet. I'm a passionate Developer, with strong
              administrative & communication skills, good attention to detail &
              the ability to write efficient code.
            </p>
            <hr />
            <p>
              I'm open to Job opportunities. If you think my skills are relevant
              to your job requirements then do contact me.
            </p>
          </div>
        ) : (
          <div className="exp-div">
            <Expdiv />
          </div>
        )}
      </div>
    </div>
  );
}
