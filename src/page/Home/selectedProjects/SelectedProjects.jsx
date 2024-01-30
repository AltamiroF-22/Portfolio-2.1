// react
import { useState, useEffect } from "react";
// "data" selectedProjects
// import { SelectedProjectsData } from "../../../data/projects/SelectedProjects";
//components
import Project from "../../../components/projectsSelected/ProjectsSelected";
import TextEffect from "../../../components/textEffect/TextEffect";
// styles
import "./SelectedProjects.sass";

//temporary "solution"
import IPAddressImage from "../../../assets/imgs/IP-Address.png";
import SpaceImage from "../../../assets/imgs/Space.png";
import PedraPapelImage from "../../../assets/imgs/pedra-papel.png";
import RestCountryImage from "../../../assets/imgs/rest-country.png";
import DpFlexImage from "../../../assets/imgs/dp-flex.png";

const SelectedProjects = () => {
  const [SelectedProjectsData, setSelectedProjectsData] = useState([]);

  useEffect(() => {
    setSelectedProjectsData([
      {
        id: 1,
        name: "REST Countries API...",
        image: RestCountryImage,
        project_live: "https://snazzy-malasada-b4cc16.netlify.app/"
      },
      {
        id: 2,
        name: "IP Address Tracker",
        image: IPAddressImage,
        project_live: "https://elegant-fudge-d486ff.netlify.app/"
      },
      {
        id: 3,
        name: "Space Tourism",
        image: SpaceImage,
        project_live: "https://cerulean-gingersnap-90ed6f.netlify.app/"
      },
      {
        id: 4,
        name: "Rock Paper Scissors",
        image: PedraPapelImage,
        project_live: "https://magical-duckanoo-d9dbfc.netlify.app/"
      },
      {
        id: 5,
        name: "Display-Flex Config",
        image: DpFlexImage,
        project_live:
          "https://64efd8178cf9c304f36e4ead--deluxe-profiterole-fea8eb.netlify.app/"
      }
    ]);
  }, []);

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
