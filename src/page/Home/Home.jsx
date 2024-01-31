// Home.jsx
//react
import { useEffect, useState, useRef } from "react";

//components
import Header from "./Header/Header";
import About from "./about/About";
import MagnetoCircle from "../../components/magnetoCirlcle/MagnetoCorcle";
import { SelectedProjectsData } from "../../data/projects/SelectedProjects";
import { ProjectComponent } from "../../components/projectsSelected/ProjectsSelected";
import TextEffect from "../../components/textEffect/TextEffect";

//lenis scroll smooth
import Lenis from "@studio-freight/lenis";

//GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//styles
import "./Home.sass";
import "./SelectedProjects.sass";

//images
import ArrowsUP from "../../assets/arrow/ArrowsUP.svg";

const Home = () => {
  const textEffectRef = useRef(null);
  const selectedProjectsRef = useRef(null);
  const [isTextEffectVisible, setIsTextEffectVisible] = useState(false);
  const [isSelectedProjects, setIsSelectedProjects] = useState(false);
  const [showBackUpArrow, setShowBackUpArrow] = useState(false);

  useEffect(() => {
    // lenis scroll smooth
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 900);
    });

    gsap.ticker.lagSmoothing(0);

    // show Back Up Arrow
    const handleScroll = () => {
      scrollY > 300 ? setShowBackUpArrow(true) : setShowBackUpArrow(false);
    };

    window.addEventListener("scroll", handleScroll);

    // when visible start from the top of the section set new className
    // and call text effect
    const textEffect = textEffectRef.current;
    const selectedProjects = selectedProjectsRef.current;

    const handleScrollTextEffect = () => {
      let textEffectBox = textEffect.getBoundingClientRect();
      let selectedProjectsBox = selectedProjects.getBoundingClientRect();

      if (Math.round(selectedProjectsBox.y - window.innerHeight) < 0) {
        setIsSelectedProjects(true);
      }

      if (Math.round(textEffectBox.y + 30 - window.innerHeight) < 0) {
        setIsTextEffectVisible(true);
      }
    };
    window.addEventListener("scroll", handleScrollTextEffect);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollTextEffect);
    };
  }, []);

  return (
    <div className="home-page" id="home">
      <Header />
      <About />

      {/* _____________ selected projects main ___________*/}
      <main
        className={`selectedProjects ${
          isSelectedProjects ? "selected-projects-visible" : ""
        }`}
        ref={selectedProjectsRef}
      >
        <header className="selected-rojects-title" ref={textEffectRef}>
          {isTextEffectVisible ? (
            <TextEffect
              text1="selected projects"
              fontSize="Size30"
              fontWeigth="W700"
              color="switch-Dark-Light"
            />
          ) : (
            ""
          )}
        </header>

        <section className="project">
          {SelectedProjectsData.map((item) => (
            <article key={item.id}>
              <ProjectComponent
                h2={item.name}
                src={item.image}
                alt={item.name}
                href={item.project_live}
              />
            </article>
          ))}
        </section>
      </main>
      {/*______________ end selected projects main _________________ */}

      <a href="#home" className="back-to-top">
        {showBackUpArrow ? (
          <MagnetoCircle
            position="fixed"
            img={ArrowsUP}
            size="normal"
            backgroundColor="oliva"
            cursor="pointer"
          />
        ) : (
          ""
        )}
      </a>
    </div>
  );
};

export default Home;
