import React from "react";
import {
  BsFillHouseDoorFill,
  BsMortarboardFill,
  BsBagFill,
  BsTools,
  BsEnvelopeFill,
} from "react-icons/bs";
import "../styles/Navbar.scss";
import resume from "../Vishal_Yadav_CV.pdf";
export default function Navbar() {
  const handleclick = (e) => {
    const ele = document.getElementsByClassName("active");
    console.log(ele);
    for (let i of ele) {
      i.className = i.className.replace("active", "");
    }
    e.target.className += " active";
  };
  const handleclickmob = (e) => {
    const ele = document.getElementsByClassName("activemob");
    console.log(ele);
    for (let i of ele) {
      i.className = i.className.replace("activemob", "");
    }
    e.target.className += " activemob";
  };
  return (
    <>
      <div className="nav">
        <div>Portfolio</div>
        <div>
          <ul className="nav-ul">
            <li>
              <a onClick={handleclick} className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={handleclick} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={handleclick} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={handleclick} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={handleclick} href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <a href={resume} className="nav-button">
            {" "}
            Resume{" "}
          </a>
        </div>
      </div>
      <div className="mob-nav">
        <a  onClick={handleclickmob} href="#home" className="activemob">
          <button>
            <BsFillHouseDoorFill />
          </button>
        </a>
        <a  onClick={handleclickmob} href="#about">
          <button>
            <BsMortarboardFill />
          </button>{" "}
        </a>
        <a onClick={handleclickmob} href="#projects">
          {" "}
          <button>
            <BsBagFill />{" "}
          </button>{" "}
        </a>
        <a onClick={handleclickmob} href="#skills">
          {" "}
          <button>
            <BsTools />
          </button>{" "}
        </a>
        <a onClick={handleclickmob} href="#contact">
          {" "}
          <button>
            <BsEnvelopeFill />
          </button>
        </a>
      </div>
    </>
  );
}
