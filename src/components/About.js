import React from "react";
import { Fab } from "@material-ui/core";
import arrowIcon from "../images/arrow.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="header-text">
        <h1>About me</h1>
        <div class="row">
          <div class="col-8">
            <p>
              I’m a software engineering student, worked on various projects and
              freelancing. Welcome to my personal website where you discover my
              skills and the services I offer! I’m a software engineering
              student, worked on various projects and freelancing. Welcome to my
              personal website where you discover my skills and the services I
              offer! I’m a software engineering student, worked on various
              projects and freelancing. Welcome to my personects and
              freelancing. Welcome to my personal website where you discover my
              skills and the services I offer! I’m a software engineering
              student, worked on various projects and freelancing. Welcome to my
              personal websects anhe services I offer!
            </p>
          </div>
          <div class="col-2">
            <Link to="/About">
              <Fab className="fab">
                <img className="arrow" src={arrowIcon}></img>
              </Fab>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
