// Home.jsx
//react
import { useEffect } from "react";
//components
import Header from "./Header/Header";
//lenis scroll smooth
import Lenis from "@studio-freight/lenis";
//GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
//styles
import './Home.sass'

const Home = () => {

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 900);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <div className="home-page">
      <Header />
    </div>
  );
};

export default Home;
