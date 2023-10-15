import React, { useEffect, useState } from "react";
import "../styles/Projects.scss";
import { FaGithub } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import src1 from "../assets/carrental.png";
import src2 from "../assets/carrental2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function Projects() {
   

   
  return (
    <div className="main">
      <h1>
        MY <span style={{ color: "rgb(231, 90, 90)" }}>PROJECTS</span>
      </h1>
      <div className="container-project">
        <div className="details carrental" >
          <img className="project-img" alt="Car Rental" src={src1}></img>
          <div className="name">
            <h2>Car Rental</h2>
            <h4>
              <span style={{ color: "red" }}>Tech Stack: </span>Saas, React
            </h4>
            <p style={{fontSize:"14px"}}>A car rental website is an online platform that allows users to rent cars for personal or business use.The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price.  </p>

            <div>
            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://github.com/VishalYadav1311"
              >
                <FaGithub style={{ fontSize: "1.5rem" }}></FaGithub>
              </a>
            </button>

            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://car-rental-ten.vercel.app/"
              >
                <BsEye style={{ fontSize: "1.5rem", margin: "0 20px" }}></BsEye>
              </a>{" "}
            </button>
            </div>
          </div>
        </div>
        <div className="details">
          <img
            className="img"
            src="https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg"
          ></img>
          <div className="name">
            <h2>Project2</h2>
            <h4>
              <span style={{ color: "red" }}>Tech Stack: </span>React, Redux,
              MongoDB, Node
            </h4>
            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://github.com/VishalYadav1311"
              >
                <FaGithub style={{ fontSize: "1.5rem" }}></FaGithub>
              </a>
            </button>

            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://car-rental-ten.vercel.app/"
              >
                <BsEye style={{ fontSize: "1.5rem", margin: "0 20px" }}></BsEye>
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="details">
          <img
            className="project-img"
            src="https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg"
          ></img>
          <div className="name">
            <h2>Project3</h2>
            <h4>
              <span style={{ color: "red" }}>Tech Stack: </span>React, Redux,
              MongoDB, Node
            </h4>
            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://github.com/VishalYadav1311"
              >
                <FaGithub style={{ fontSize: "1.5rem" }}></FaGithub>
              </a>
            </button>

            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://car-rental-ten.vercel.app/"
              >
                <BsEye style={{ fontSize: "1.5rem", margin: "0 20px" }}></BsEye>
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="details">
          <img
            className="img"
            src="https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg"
          ></img>
          <div className="name">
            <h2>Project4</h2>
            <h4>
              <span style={{ color: "red" }}>Tech Stack: </span>React, Redux,
              MongoDB, Node
            </h4>
            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://github.com/VishalYadav1311"
              >
                <FaGithub style={{ fontSize: "1.5rem" }}></FaGithub>
              </a>
            </button>

            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://car-rental-ten.vercel.app/"
              >
                <BsEye style={{ fontSize: "1.5rem", margin: "0 20px" }}></BsEye>
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="details">
          <img
            className="img"
            src="https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg"
          ></img>
          <div className="name">
            <h2>Project5</h2>
            <h4>
              <span style={{ color: "red" }}>Tech Stack: </span>React, Redux,
              MongoDB, Node
            </h4>
            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://github.com/VishalYadav1311"
              >
                <FaGithub style={{ fontSize: "1.5rem" }}></FaGithub>
              </a>
            </button>

            <button style={{ border: "none", background: "none" }}>
              {" "}
              <a
                style={{ color: "black" }}
                href="https://car-rental-ten.vercel.app/"
              >
                <BsEye style={{ fontSize: "1.5rem", margin: "0 20px" }}></BsEye>
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
      {/* <div className="buttons">
        <button id="prev" onClick={prevslide}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={nextslide}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div> */}
    </div>
  );
}
