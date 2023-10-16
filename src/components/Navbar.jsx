import React from "react";
import {
  BsFillHouseDoorFill,
  BsMortarboardFill,
  BsBagFill,
  BsTools,
  BsEnvelopeFill,
} from "react-icons/bs";
import "../styles/Navbar.scss";
import resume from '../Vishal_Yadav_CV.pdf'
export default function Navbar() {
  const handleclick = (e) => {
    const ele = document.getElementsByClassName("active");
    console.log(ele);
    for (let i of ele) {
      i.className = i.className.replace("active", "");
    }
    e.target.className += " active";
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

          <a href={resume} className="nav-button"> Resume </a>
        </div>
      </div>
      <div className="mob-nav">
        <button>
          <a href="#home">
            <BsFillHouseDoorFill />
          </a>
        </button>
        <button>
          <a href="#about">
            <BsMortarboardFill />
          </a>
        </button>
        <button>
          <BsBagFill />
        </button>
        <button>
          <a href="#skills">
            <BsTools />
          </a>
        </button>
        <button>
          <BsEnvelopeFill />
        </button>
      </div>
    </>
  );
}
