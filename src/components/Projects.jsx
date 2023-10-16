import React, { useEffect, useState } from "react";
import "../styles/Projects.scss";
import { FaGithub } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import carrental from "../assets/carrental.png";
import portfoliopage from "../assets/portfoliopage.jpg";
import videohub from "../assets/videohub.jpeg";
import chatimg from "../assets/chatimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function Projects() {
  return (
    <div className="main" id="projects">
      <h1>
        MY <span style={{ color: "rgb(231, 90, 90)" }}>PROJECTS</span>
      </h1>
      <div className="container-project">
        <div
          className="details carrental">
          <img className="project-img" alt="Car Rental" src={carrental}></img>
          <div className="name">
            <h2>Car Rental</h2>
            <h4>
              <span style={{ color: "red" }}>Tech Stack: </span>Saas, React
            </h4>
            <p style={{ fontSize: "14px" }}>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use.The website provides an
              easy-to-use interface for searching, comparing, and reserving cars
              from a wide selection of vehicles that vary in make, model, size,
              and price.{" "}
            </p>

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
                  <BsEye
                    style={{ fontSize: "1.5rem", margin: "0 20px" }}
                  ></BsEye>
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="details" >
          <img className="img" src={portfoliopage}></img>
          <div className="name">
            <h2>My Portfolio</h2>
            <h4>
              <span style={{ color: "red" }}>Tech Stack: </span>HTML, CSS,
              Javascript, React
            </h4>
            <button
              className="btns"
              style={{ border: "none", background: "none" }}
            >
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
        <div className="details videohub" >
          <img className="project-img" src={videohub}></img>
          <div className="name">
            <h2 style={{ marginTop: "0px" }}>Video-Hub</h2>
            <h4>
              <span style={{ color: "red" }}>Tech Stack: </span>Chakra UI, React
            </h4>
            <p style={{ fontSize: "14px" }}>
              This application is an online platform where you watch to free
              videos with an better User Interface.{" "}
            </p>
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
                href="https://video-hub-flax.vercel.app/"
              >
                <BsEye style={{ fontSize: "1.5rem", margin: "0 20px" }}></BsEye>
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="details"  >
          <img className="img" src={chatimg}></img>
          <div className="name">
            <h2>Chat APP</h2>
            <h4>
              <span style={{ color: "red" }}>Tech Stack: </span>React, REST Api,
              CSS, Express, MongoDB, Socket.IO, Node
            </h4>
            <p style={{ fontSize: "14px" }}>
              This is a Chatting Application . In this project we build and
              deploy a real-time chat application within 2 days With
              Authentication and Avtar. Using React.js, Socket.io, Nodejs
            </p>
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
                href="https://stackbox.vercel.app/login"
              >
                <BsEye style={{ fontSize: "1.5rem", margin: "0 20px" }}></BsEye>
              </a>{" "}
            </button>
          </div>
        </div>
        {/* <div className="details">
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
        </div> */}
      </div>
    </div>
  );
}
