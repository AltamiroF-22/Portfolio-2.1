/* eslint-disable react/no-unescaped-entities */
import { useRef, useState, useLayoutEffect } from "react";
//styles
import "./About.sass";
//component
import TextEffect from "../../../components/textEffect/TextEffect";
//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const textEffectRef = useRef(null);
  const [isTextEffectVisible, setIsTextEffectVisible] = useState(false);

  //text effect
  useLayoutEffect(() => {
    const textEffect = textEffectRef.current;
    const handleAboutScroll = () => {
      let textEffectBox = textEffect.getBoundingClientRect();
      if (Math.round(textEffectBox.y + 30 - window.innerHeight) < 0) {
        setIsTextEffectVisible(true);
      } else {
        setIsTextEffectVisible(false);
      }
    };
    window.addEventListener("scroll", handleAboutScroll);

    return () => {
      window.removeEventListener("scroll", handleAboutScroll);
    };
  }, []);

  //about
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".about", {
      scale: 1,
      scrollTrigger: {
        trigger: ".container",
        // markers: true,
        scrub: 1,
        start: "top 80%",
        end: "bottom 145%",
        // pin: true,
      },
    });

    return () => {
      gsap.killTweensOf(".about");
    };
  }, []);

  return (
    <main className="about-main" id="about">
      <div className="container">
        <section className={`about`}>
          <h2 className="title" ref={textEffectRef}>
            {isTextEffectVisible && (
              <TextEffect
                text1="about-me"
                fontWeigth="W700"
                color="lightGray"
                fontSize="Size30"
              />
            )}
          </h2>
          <div className="textAboutMe">
            <article className="leftSide">
              <p>
                Hey there, I'm Altamiro Ribeiro da Rocha Junior, a web
                development enthusiast who began their journey in the
                programming world in December 2022. My exploration started with
                HTML and CSS, delving into the structures and design of web
                pages.
              </p>
              <p>
                The passion for web development led me to explore JavaScript in
                March 2023, opening doors to interactivity and dynamism in my
                projects.
              </p>
              <p>
                Later, in November 2023, I embarked on an exciting journey to
                learn React and Sass, enhancing my skills and enabling me to
                create more robust and stylized web applications.
              </p>
            </article>
            <article className="rightSide">
              <p>
                At the end of 2023, I faced a personal challenge when my mom was
                hospitalized, which caused me to take a break for about two
                months. However, I returned to my learning path at the end of
                December 2023, motivated by my passion for programming and my
                desire to continue growing as a developer.
              </p>
              <p>
                But nowadays (2/16/2024), I'm excited to start my journey with
                TypeScript, adding an additional layer of typing and structure
                to my skill set. I'm eager to explore new horizons and face more
                complex challenges while continuing to improve my skills as a
                developer...
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
