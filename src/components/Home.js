import React from "react";
import { Fab } from "@material-ui/core";
import arrowIcon from "../images/arrow.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="header-wrapper">
      <div className="header-text">
        <h1 className="name-title">Salim Kaboura</h1>
        <h2 className="job-title">
          Web and Mobile Developer.
          <br />
          Graphic Designer.
        </h2>
        <p className="small-text">
          I’m a software engineering student, worked on various projects and
          freelancing. Welcome to my personal website where you discover my
          skills and the services I offer!
        </p>
        <Link to="/Services">
          <Fab className="fab">
            <img className="arrow" src={arrowIcon} alt="Swiping Arrow"></img>
          </Fab>
        </Link>
      </div>
    </div>
  );
};

export default Home;
