/* eslint-disable react/prop-types */

// styles
import "./ProjectsSelected.sass";

export const ProjectComponent = ({ src, alt, h2, href }) => {
  return (
    <>
      <figure className="single-project">
        <a href={href} target="_blank" rel="noreferrer" className="project-img">
          <img src={src} alt={alt} className="project-img" />
        </a>
      </figure>
      <figcaption>
        <h2>{h2}</h2>
      </figcaption>
    </>
  );
};
