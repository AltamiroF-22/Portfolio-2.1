// Home.jsx
//react
import { useEffect, useState } from "react";

//components
import Header from "./Header/Header";
import About from "./about/About"
import MagnetoCircle from "../../components/magnetoCirlcle/MagnetoCorcle";

//lenis scroll smooth
import Lenis from "@studio-freight/lenis";

//GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//styles
import "./Home.sass";

//images
import ArrowsUP from "../../assets/arrow/ArrowsUP.svg";

const Home = () => {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page" id="home">
      <Header />
      <About/>
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
