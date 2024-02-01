/* eslint-disable react/prop-types */

// styles
import "./ProjectsSelected.sass";

export const ProjectComponent = ({ src, alt, h2, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <figure className="single-project">
        <div className="project-img">
          <img src={src} alt={alt} className="project-img" />
        </div>
      </figure>
      <figcaption>
        <h2>{h2}</h2>
      </figcaption>
    </a>
  );
};
