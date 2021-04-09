import React from "react";
import abstractPink from "../images/abstractpink.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <img class="pinkimage" height="20%" src={abstractPink} />
      <div className="header-text">
        <h1 className="white-title">
          I’m Salim Kaboura <br />
          Web & Mobile Developer
        </h1>
        <h1 className="pink-title">& Graphic Designer.</h1>
        <p className="small-text">
          I’m a software engineering student, worked on various projects and
          freelancing. <br />
          Welcome to my personal website where you discover my skills and the
          services I offer!
        </p>
      </div>
    </div>
  );
};

export default Header;
