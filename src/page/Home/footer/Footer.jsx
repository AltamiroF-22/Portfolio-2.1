/* eslint-disable react/prop-types */
import "./Footer.sass";
import FavIcon from "../../../assets/favicon/favIcon.svg";
import { Link } from "react-router-dom"; 

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
        <Link to="#home">
          <img src={FavIcon} alt="logo / favIcon" />
        </Link>
        <div className="right">
          <Link
            ref={gitHubRef}
            to="https://github.com/AltamiroF-22"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            ref={instagramRef}
            to="https://www.instagram.com/junior.rx22/"
            target="_blank"
          >
            <IoLogoInstagram />
          </Link>
          <Link
            ref={linkedinRef}
            to="https://www.linkedin.com/in/altamiro-j%C3%BAnior-79060b261/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            ref={frontendMentorRef}
            to="https://www.frontendmentor.io/profile/AltamiroF-22"
            target="_blank"
          >
            <SiFrontendmentor />
          </Link>
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
