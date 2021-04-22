import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fab } from "@material-ui/core";
import arrowIcon from "../images/arrow.svg";
import concerto from "../images/concerto.png";
import website1 from "../images/website1.jpg";
import website2 from "../images/website2.png";

import gsap from "gsap";

const Portfolio = () => {
  useEffect(() => {
    const divs = document.querySelectorAll(".myimg");
    gsap.set(divs[1], { x: 100, opacity: 1 });

    gsap
      .timeline({ repeat: -1, defaults: { duration: 3 } })

      .add("one")
      .to(divs[0], { y: 100, x: 50, opacity: 0.05 }, "one")
      .to(divs[1], { y: -350, x: 50, opacity: 0.05 }, "one")
      .to(divs[2], { y: 300, x: 50, opacity: 1 }, "one")

      .add("two")
      .to(divs[0], { y: 300, x: 50, opacity: 1 }, "two")
      .to(divs[1], { y: 300, x: 50, opacity: 0.05 }, "two")
      .to(divs[2], { y: -600, x: 50, opacity: 0.05 }, "two")

      .add("three")
      .to(divs[0], { y: 0, x: 50, opacity: 0.05 }, "three")
      .to(divs[1], { y: 0, x: 50, opacity: 1 }, "three")
      .to(divs[2], { y: 0, x: 50, opacity: 0.05 }, "three");
  });
  return (
    <div class="portfolio-container">
      <div class="row">
        <div class="col-sm-8">
          <div class="grid">
            <div class="row">
              <div class="col-sm myimg">
                <img src={concerto} alt="Swiping Arrow" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm myimg">
                <img src={website1} alt="Swiping Arrow" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm myimg">
                <img src={website2} alt="Swiping Arrow" />
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
              <Link to="/Skills">
                <Fab className="fab">
                  <img
                    className="arrow"
                    src={arrowIcon}
                    alt="Swiping Arrow"
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
