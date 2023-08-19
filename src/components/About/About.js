import GitHubIcon from "@material-ui/icons/GitHub";
import { about } from "../../portfolio";
import "./About.css";
import { Instagram, Twitter } from "@material-ui/icons";

const About = () => {
  const { name, role, social } = about;

  return (
    <div className="about center">
      {name && (
        <p className="about-heading">
          Hi, I am <span className="about__name">{name}.</span>
        </p>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}

      <div className="about__contact center">
        {/* {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )} */}

        {social && (
          <>
            {social.instagram && (
              <a
                href={social.instagram}
                aria-label="instagram"
                className="link link--icon"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label="twitter"
                className="link link--icon"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter />
              </a>
            )}

            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
