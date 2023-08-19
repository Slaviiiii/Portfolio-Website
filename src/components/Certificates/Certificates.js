import React from "react";
import "./Certificates.css";

import react from "../../assets/certificates/React.jpg";
import angular from "../../assets/certificates/Angular.jpg";
import htmlAndCss from "../../assets/certificates/HtmlAndCss.jpg";

const Certificates = () => {
  return (
    <section id="certificates" className="certification">
      <h2>CERTIFICATIONS</h2>
      <div className="certificates-content">
        <div className="certificates-issuer">
          <h3>Software University</h3>
          <p className="paragraph-position">Fullstack Javascript Developer.</p>
          <p className="paragraph">
            Awarded upon successful completion of an intensive program at
            Software University, covering a comprehensive curriculum in HTML,
            CSS, JavaScript, Express.js, React, Angular and MongoDB
            technologies.
          </p>
        </div>
        <ul className="certificates">
          <li>
            <a
              href="https://softuni.bg/certificates/details/182982/9a17d11e"
              target="_blank"
            >
              <p>Angular</p>
              <img src={angular} alt="Angular Certificate" />
            </a>
          </li>
          <li>
            <a
              href="https://softuni.bg/certificates/details/168575/21d15f5d"
              target="_blank"
            >
              <p>React</p>
              <img src={react} alt="React Certificate" />
            </a>
          </li>
          <li>
            <a
              href="https://softuni.bg/certificates/details/174761/0f433a98"
              target="_blank"
            >
              <p>Html & Css</p>
              <img src={htmlAndCss} alt="Html and Css Certificate" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
