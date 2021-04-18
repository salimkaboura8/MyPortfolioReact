import React from "react";
import twitterIcon from "../images/twitter.svg";
import githubIcon from "../images/github.svg";
import linkedinIcon from "../images/linkedin.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        <h1>Thank you for visiting my website!</h1>
        <h2>You cant contact me on : salimkaboura8@gmail.com</h2>
        <div class="row icons">
          <div class="col-2">
            <img src={twitterIcon} />
          </div>
          <div class="col-2">
            <a href="https://github.com/salimkaboura8/" target="_blank">
              <img src={githubIcon} />
            </a>
          </div>

          <div class="col-2">
            <a href="https://www.linkedin.com/in/kabourasalim" target="_blank">
              <img src={linkedinIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
