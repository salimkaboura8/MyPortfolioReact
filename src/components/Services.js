import React from "react";
import laptopLogo from "../images/laptop.png";
import logoLogo from "../images/logo.png";
import mobileLogo from "../images/mobile.png";
import paintingLogo from "../images/paint.png";

const Services = () => {
  return (
    <div class="services-wrapper">
      <div class="row">
        <div class="col-sm-4">
          <h1 className="textone">My Services</h1>
          <p className="texttwo">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div class="col-sm-4">
          <img class="myimg laptopLogo" src={laptopLogo} />
          <h1 className="textonesm">Website Development</h1>
          <p className="texttwosm">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
          <img class="myimg paintingLogo" src={paintingLogo} />
          <h1 className="textonesm">Graphic Design</h1>
          <p className="texttwosm">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div class="col-sm-4">
          <img class="myimg mobileLogo" src={mobileLogo} />
          <h1 className="textonesm">Mobile Development</h1>
          <p className="texttwosm">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
          <img class="myimg logoLogo" src={logoLogo} />
          <h1 className="textonesm">Logo Design</h1>
          <p className="texttwosm">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
      </div>
    </div>

    /*<div class="container">
      <div class="row">
        <div class="col">
          
        <div class="col">
          
          
        </div>
      </div>
    </div>*/
  );
};

export default Services;
