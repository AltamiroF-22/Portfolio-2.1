// react
// import { useState, useEffect, useRef } from "react";
// "data" selectedProjects
import { SelectedProjectsData } from "../../../data/projects/SelectedProjects";
//components
import Project from "../../../components/projectsSelected/ProjectsSelected";
import TextEffect from "../../../components/textEffect/TextEffect";
// styles
import "./SelectedProjects.sass";

const SelectedProjects = () => {
  return (
    <main className="selectedProjects">
      <div className="selected-rojects-title">
        <TextEffect
          text1="selected projects"
          fontSize="Size30"
          fontWeigth="W700"
        />
      </div>

      <section className="project">
        {SelectedProjectsData.map((item) => (
          <div key={item.id}>
            <Project
              h2={item.name}
              src={item.image}
              alt={item.name}
              href={item.project_live}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default SelectedProjects;
