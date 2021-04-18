import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@material-ui/core";
import arrowIcon from "../images/arrow.svg";
import concerto from "../images/concerto.png";

const Portfolio = () => {
  return (
    <div class="portfolio-container">
      <div class="row">
        <div class="col-sm-8">
          <div class="grid">
            <div class="row">
              <div class="col-sm">
                <img src={concerto} />
              </div>
              <div class="col-sm">
                <img src={concerto} />
              </div>
              <div class="col-sm">
                <img src={concerto} />
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <img src={concerto} />
              </div>
              <div class="col-sm">
                <img src={concerto} />
              </div>
              <div class="col-sm">
                <img src={concerto} />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <ul class="list-group">
            <li class="list-group-item border-0">Websites</li>
            <li class="list-group-item border-0">Mobile apps</li>
            <li class="list-group-item border-0">Logos</li>
            <li class="list-group-item border-0">Graphic Design</li>
            <li class="list-group-item border-0">
              <Link to="/Portfolio">
                <Fab className="fab">
                  <img
                    className="arrow"
                    src={arrowIcon}
                    alt="Girl in a jacket"
                  ></img>
                </Fab>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
