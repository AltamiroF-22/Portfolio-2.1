/* eslint-disable react/prop-types */
import "./Footer.sass";
import FavIcon from "../../../assets/favicon/favIcon.svg";

// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { SiFrontendmentor } from "react-icons/si";

const Footer = ({
  gitHubRef,
  instagramRef,
  linkedinRef,
  frontendMentorRef
}) => {
  return (
    <footer>
      <div className="up">
        <a href="#home">
          <img src={FavIcon} alt="logo / favIcon" />
        </a>
        <div className="right">
          <a
            ref={gitHubRef}
            href="https://github.com/AltamiroF-22"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            ref={instagramRef}
            href="https://www.instagram.com/junior.rx22/"
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoInstagram />
          </a>
          <a
            ref={linkedinRef}
            href="https://www.linkedin.com/in/altamiro-j%C3%BAnior-79060b261/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            ref={frontendMentorRef}
            href="https://www.frontendmentor.io/profile/AltamiroF-22"
            rel="noreferrer"
            target="_blank"
          >
            <SiFrontendmentor />
          </a>
        </div>
      </div>
      <div className="bottom">
        <p>
          <span>&copy;</span> Copyright all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
