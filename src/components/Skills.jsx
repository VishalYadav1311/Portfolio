import React from "react";
import "../styles/Skills.scss";
import html from "../assets/skillsimg/html.png";
import css from "../assets/skillsimg/css.png";
import javascript from "../assets/skillsimg/javascript.png";
import redux from "../assets/skillsimg/redux.png";
import node from "../assets/skillsimg/node.png";
import express from "../assets/skillsimg/express.png";
import mongodb from "../assets/skillsimg/mongodb.png";
import mongoose from "../assets/skillsimg/mongoose.png";
import tailwind from "../assets/skillsimg/tailwind.png";
import react from "../assets/skillsimg/react.png";
import bootstrap from "../assets/skillsimg/bootstrap.png";
import chakra from "../assets/skillsimg/chakra.png";
import postman from "../assets/skillsimg/postman.png";
import git from "../assets/skillsimg/git.png";
import photshop from "../assets/skillsimg/photoshop.png";
import websocket from '../assets/skillsimg/websocket.png';
import java from '../assets/skillsimg/java.png';

export default function Skills() {
  return (
    <div className="skill" id="skills" >
      <h1>
        My <span>Skills</span>
      </h1>

      <div className="container-skill" >
        <div className="element-div">
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={html}></img>
            <div className="name">HTML</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={css}></img>
            <div className="name">CSS</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={javascript}></img>
            <div className="name">Javascript</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={java} style={{height:'70px'}}></img>
            <div className="name">Java Core</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={react}></img>
            <div className="name">React</div>
          </div>
          <div className="element"  data-aos="fade-up"   data-aos-delay="50">
            <img className="img" src={redux}></img>
            <div className="name">Redux</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={node}></img>
            <div className="name">Node JS</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={mongodb}></img>
            <div className="name">Mongo DB</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={mongoose}></img>
            <div className="name">mongoose</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={express}></img>
            <div className="name">Express</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={tailwind}></img>
            <div className="name">Tailwind</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={bootstrap}></img>
            <div className="name">Bootstrap</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={chakra}></img>
            <div className="name">Chakra UI</div>
          </div>
          <div className="element" data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={git}></img>
            <div className="name">Git</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={postman}></img>
            <div className="name">postman</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={websocket}></img>
            <div className="name">Web Socket</div>
          </div>
          <div className="element"  data-aos="fade-up"  data-aos-delay="50">
            <img className="img" src={photshop}></img>
            <div className="name">Photshop</div>
          </div>
        </div>
      </div>
    </div>
  );
}
