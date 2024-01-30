/* eslint-disable react/prop-types */

// styles
import "./ProjectsSelected.sass";

const Project = ({ src, alt, h2, href }) => {
  return (
    <>
      <div className="single-project">
        <a href={href} target="blank" className="project-img">
          <img src={src} alt={alt} />
        </a>
      </div>
      <h2>{h2}</h2>
    </>
  );
};

export default Project;
