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
  // Refs to various elements in the component
  const textEffectRef = useRef(null);
  const selectedProjectsRef = useRef(null);
  const followCursorRef = useRef(null);
  const articleRef = useRef([]);

  // States to manage visibility and behavior
  const [isFollowCursorVisible, setIsCursorFollowVisible] = useState(false);
  const [isTextEffectVisible, setIsTextEffectVisible] = useState(false);
  const [isSelectedProjects, setIsSelectedProjects] = useState(false);
  const [showBackUpArrow, setShowBackUpArrow] = useState(false);

  useEffect(() => {
    // lenis scroll smooth initialization
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 900);
    });

    gsap.ticker.lagSmoothing(0);

    // Show back up arrow based on scroll position
    const handleScroll = () => {
      scrollY > 500 ? setShowBackUpArrow(true) : setShowBackUpArrow(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Detect visibility and trigger effects when scrolling
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

    // Follow cursor logic
    const followCursor = followCursorRef.current;
    const article = articleRef.current;
    let size = 15;

    const handleMouseEnter = () => {
      size = 60;
      if (followCursorRef.current) {
        followCursorRef.current.textContent = "View";
      }
    };
    const handleMouseLeave = () => {
      size = 15;
      if (followCursorRef.current) {
        followCursorRef.current.textContent = "";
      }
    };

    const handleFollowCursor = (e) => {
      const { pageX, pageY } = e;

      gsap.to(followCursor, {
        "--x": `${pageX - size / 2}px`,
        "--y": `${pageY - window.scrollY - size / 2}px`,
        "--size": `${size}px`,
        duration: 0.24,
        ease: "sine.out"
      });
    };

    const handleSetAdRemoveCursorFollow = () => {
      let selectedProjectsBox = selectedProjects.getBoundingClientRect();

      if (Math.round(selectedProjectsBox.y - window.innerHeight / 2) < 0) {
        setIsCursorFollowVisible(true);
      } else {
        setIsCursorFollowVisible(false);
      }
    };

    // Event listeners for mouse actions and scrolling
    article.forEach((i) => i.addEventListener("mouseenter", handleMouseEnter));
    article.forEach((i) => i.addEventListener("mouseleave", handleMouseLeave));
    window.addEventListener("mousemove", handleFollowCursor);
    window.addEventListener("scroll", handleSetAdRemoveCursorFollow);

    // Cleanup: remove all event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollTextEffect);
      window.removeEventListener("mousemove", handleFollowCursor);
      window.removeEventListener("scroll", handleSetAdRemoveCursorFollow);
      article.forEach((i) =>
        i.removeEventListener("mouseenter", handleMouseEnter)
      );
      article.forEach((i) =>
        i.removeEventListener("mouseleave", handleMouseLeave)
      );
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

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
        {/* ____selected projects cursor follow_____*/}
        <div
          className={`follow-cursor ${
            isFollowCursorVisible ? "follow-cursor-visible" : ""
          }`}
          ref={followCursorRef}
        >
          <span></span>
        </div>
        {/* ____end of cursor follow_____*/}

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
          {SelectedProjectsData.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => (articleRef.current[index] = el)}
            >
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

      <a
        href="#home"
        className={`back-to-top ${
          showBackUpArrow ? "back-to-top-on" : "back-to-top-off"
        }`}
      >
        <MagnetoCircle
          position="fixed"
          img={ArrowsUP}
          size="normal"
          backgroundColor="oliva"
          cursor="pointer"
        />
      </a>
    </div>
  );
};

export default Home;
