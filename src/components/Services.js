import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@material-ui/core";
import arrowIcon from "../images/arrow.svg";

const Services = () => {
  return (
    <div class="services-container">
      <div class="row">
        <div class="col-sm myservices">My Services</div>
        <div class="col-sm">
          <h1 className="servicesname">Mobile Development</h1>
          <p className="servicesdesc">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div class="col-sm logodesign">
          <h1>Logo Design</h1>
          <p>
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm webdev">
          <h1 className="textonesm">Website Development</h1>
          <p>
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div className="col-sm graphicdesign">
          <h1>Graphic Design</h1>
          <p>
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div class="col-sm">
          <Link to="/Portfolio">
            <Fab className="fab">
              <img
                className="arrow"
                src={arrowIcon}
                alt="Girl in a jacket"
              ></img>
            </Fab>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
