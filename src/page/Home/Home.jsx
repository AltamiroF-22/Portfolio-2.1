//react
import { useEffect, useState, useRef } from "react";

//components
import Header from "./Header/Header";
import About from "./about/About";
import ContactMe from "./contactMe/ContactMe";
import Footer from "./footer/Footer";
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

  // Refs Contact me form
  const buttomRef = useRef(null);

  // Refs footer
  const gitHubRef = useRef(null);
  const instagramRef = useRef(null);
  const linkedinRef = useRef(null);
  const frontendMentorRef = useRef(null);

  useEffect(() => {
    // lenis scroll smooth initialization
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 950);
    });

    gsap.ticker.lagSmoothing(0);

    // Show back up arrow based on scroll position
    const handleScroll = () => {
      scrollY + 300 > document.body.offsetHeight - (window, innerHeight)
        ? setShowBackUpArrow(true)
        : setShowBackUpArrow(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Detect visibility and trigger effects when scrolling
    const textEffect = textEffectRef.current;
    const selectedProjects = selectedProjectsRef.current;

    //contact me buttomn
    const buttom = buttomRef.current;

    //footer icons/links
    const gitHub = gitHubRef.current;
    const instagram = instagramRef.current;
    const linkedin = linkedinRef.current;
    const frontendMentor = frontendMentorRef.current;

    const handleScrollTextEffect = () => {
      let textEffectBox = textEffect.getBoundingClientRect();
      let selectedProjectsBox = selectedProjects.getBoundingClientRect();

      if (Math.round(selectedProjectsBox.y - window.innerHeight) < 0) {
        setIsSelectedProjects(true);
      }

      if (Math.round(textEffectBox.y + 30 - window.innerHeight) < 0) {
        setIsTextEffectVisible(true);
      } else {
        setIsTextEffectVisible(false);
      }
    };
    window.addEventListener("scroll", handleScrollTextEffect);

    // Follow cursor logic
    const followCursor = followCursorRef.current;
    const article = articleRef.current;
    let size = 15;

    //selected projects
    const handleMouseEnter = () => {
      size = 60;

      followCursor.textContent = "View";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };
    //selected projects
    const handleMouseLeave = () => {
      size = 15;

      followCursor.textContent = "";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };
    //Cursor follow
    const handleFollowCursor = (e) => {
      const { pageX, pageY } = e;

      gsap.to(followCursor, {
        "--x": `${pageX - size / 2}px`,
        "--y": `${pageY - window.scrollY - size / 1.5}px`,
        "--size": `${size}px`,
        duration: 0.24,
        ease: "sine.out",
      });
    };
    // remove Cursor function
    const handleSetAdRemoveCursorFollow = () => {
      let selectedProjectsBox = selectedProjects.getBoundingClientRect();

      if (Math.round(selectedProjectsBox.y - window.innerHeight / 2) < 0) {
        setIsCursorFollowVisible(true);
      } else {
        setIsCursorFollowVisible(false);
      }
    };

    // hover Submit Contact me Form
    const handleMouseEnterButtom = () => {
      size = 60;

      followCursor.textContent = "Send";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };
    // hover Submit Contact me Form
    const handleMouseLeaveButtom = () => {
      size = 15;

      followCursor.textContent = "";
      followCursor.style.fontSize = "15px";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };

    //footer fuctions

    //github
    const handleGitHubEnter = () => {
      size = 40;
      followCursor.textContent = "Visite";
      followCursor.style.fontSize = "10px";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };
    const handleGitHubLeave = () => {
      size = 15;
      followCursor.textContent = " ";
      followCursor.style.fontSize = "15px";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };

    // instagram
    const handleinstagramEnter = () => {
      size = 40;
      followCursor.textContent = "Visite";
      followCursor.style.fontSize = "10px";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };
    const handleinstagramLeave = () => {
      size = 15;
      followCursor.textContent = " ";
      followCursor.style.fontSize = "15px";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };

    //linkedin
    const handlelinkedinEnter = () => {
      size = 40;
      followCursor.textContent = "Visite";
      followCursor.style.fontSize = "10px";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };
    const handlelinkedinLeave = () => {
      size = 15;
      followCursor.textContent = " ";
      followCursor.style.fontSize = "15px";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };

    // front end mentor
    const handlefrontendMentorEnter = () => {
      size = 40;
      followCursor.textContent = "Visite";
      followCursor.style.fontSize = "10px";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };
    const handlefrontendMentorLeave = () => {
      size = 15;
      followCursor.textContent = " ";
      followCursor.style.fontSize = "15px";
      gsap.to(followCursor, {
        "--size": `${size}px`,
      });
    };
    /////////////////////////////////////////////////

    // Event listeners for mouse actions and scrolling
    article.forEach((i) => i.addEventListener("mouseenter", handleMouseEnter));
    article.forEach((i) => i.addEventListener("mouseleave", handleMouseLeave));
    buttom.addEventListener("mouseenter", handleMouseEnterButtom);
    buttom.addEventListener("mouseleave", handleMouseLeaveButtom);
    window.addEventListener("mousemove", handleFollowCursor);
    window.addEventListener("scroll", handleSetAdRemoveCursorFollow);

    // footer evenst
    gitHub.addEventListener("mouseenter", handleGitHubEnter);
    gitHub.addEventListener("mouseleave", handleGitHubLeave);
    instagram.addEventListener("mouseenter", handleinstagramEnter);
    instagram.addEventListener("mouseleave", handleinstagramLeave);
    linkedin.addEventListener("mouseenter", handlelinkedinEnter);
    linkedin.addEventListener("mouseleave", handlelinkedinLeave);
    frontendMentor.addEventListener("mouseenter", handlefrontendMentorEnter);
    frontendMentor.addEventListener("mouseleave", handlefrontendMentorLeave);

    // Cleanup: remove all event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollTextEffect);
      window.removeEventListener("mousemove", handleFollowCursor);
      window.removeEventListener("scroll", handleSetAdRemoveCursorFollow);
      buttom.removeEventListener("mouseenter", handleMouseEnterButtom);
      buttom.removeEventListener("mouseleave", handleMouseLeaveButtom);
      article.forEach((i) =>
        i.removeEventListener("mouseenter", handleMouseEnter)
      );
      article.forEach((i) =>
        i.removeEventListener("mouseleave", handleMouseLeave)
      );

      // footer remove events
      gitHub.removeEventListener("mouseenter", handleGitHubEnter);
      gitHub.removeEventListener("mouseleave", handleGitHubLeave);
      instagram.removeEventListener("mouseenter", handleinstagramEnter);
      instagram.removeEventListener("mouseleave", handleinstagramLeave);
      linkedin.removeEventListener("mouseenter", handlelinkedinEnter);
      linkedin.removeEventListener("mouseleave", handlelinkedinLeave);
      frontendMentor.removeEventListener(
        "mouseenter",
        handlefrontendMentorEnter
      );
      frontendMentor.removeEventListener(
        "mouseleave",
        handlefrontendMentorLeave
      );
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  

  return (
    <div className="home-page" id="home">
      <Header />
      <About />

      {/* _____________ selected projects main ___________*/}
      <main
        id="selectedProjects"
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

        {/* Header for the selected projects section */}
        <header className="selected-rojects-title" ref={textEffectRef}>
          {isTextEffectVisible && (
            <TextEffect
              text1="selected projects"
              fontSize="Size30"
              fontWeigth="W800"
              color="switch-Dark-Light"
            />
          )}
        </header>

        {/* Section containing individual project articles */}
        <section className="project">
          {SelectedProjectsData.map((item, index) => (
            <article
              // className="single-project"
              key={item.id}
              ref={(el) => (articleRef.current[index] = el)}
            >
              {/* Render ProjectComponent for each project */}
              <ProjectComponent
                className="single-project"
                id={item.id}
                h2={item.name}
                src={item.image}
                alt={item.alt}
                href={item.project_live}
              />
            </article>
          ))}
        </section>
      </main>

      <ContactMe buttomRef={buttomRef} />
      <Footer
        gitHubRef={gitHubRef}
        instagramRef={instagramRef}
        linkedinRef={linkedinRef}
        frontendMentorRef={frontendMentorRef}
      />

      {/* Back-to-top button with MagnetoCircle component */}
      <a
        href="#home"
        alt="arrowUp"
        className={`back-to-top ${
          showBackUpArrow ? "back-to-top-on" : "back-to-top-off"
        }`}
      >
        <MagnetoCircle
          position="fixed"
          img={ArrowsUP}
          size="normal"
          alt="arrowUp"
          backgroundColor="oliva"
          cursor="pointer"
        />
      </a>
    </div>
  );
};

export default Home;
