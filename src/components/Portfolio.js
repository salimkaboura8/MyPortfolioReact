import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-text">
        <h1>Portfolio: Here are some examples of my work!</h1>
        <div class="slider">
          <div class="slides">
            <div class="slide-item" id="slide-1"></div>
            <div class="slide-item" id="slide-2"></div>
            <div class="slide-item" id="slide-3"></div>
            <div class="slide-item" id="slide-4"></div>
            <div class="slide-item" id="slide-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
