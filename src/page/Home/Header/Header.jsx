/* eslint-disable no-undef */
// components
import TextEffect from "../../../components/textEffect/TextEffect";

// react components
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeSwicth";

// styles
import "./Header.sass";
//gsap
import { gsap } from "gsap";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const overlayRef = useRef(null);
  const textOverlayRef = useRef(null);

  useEffect(() => {
    // clip path overlay animation / position / size
    const overlay = overlayRef.current;
    const textOverlay = textOverlayRef.current;

    let size = 10;

    const handleMouseEnter = () => {
      size = 80;
    };
    const handleMouseLeave = () => {
      size = 10;
    };

    textOverlay.addEventListener("mouseenter", handleMouseEnter);
    textOverlay.addEventListener("mouseleave", handleMouseLeave);

    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;
      const x = Math.round((pageX / window.innerWidth) * 100);
      const y = Math.round((pageY / window.innerHeight) * 100);

      gsap.to(overlay, {
        "--x": `${x + 0.5}%`,
        "--y": `${y + 0.5}%`,
        "--size": `${size}px`,
        duration: 0.27,
        ease: "sine.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener
    return () => {
      textOverlay.removeEventListener("mouseenter", handleMouseEnter);
      textOverlay.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header>
      <div className="same4Both">
        <div className="text">
          <TextEffect
            text1="Welcome to my"
            fontSize="Size90"
            fontWeigth="W900"
            color={`${theme === "Light-Mode" ? "" : "lightGray"}`}
          />
          <TextEffect
            text1="visual journey"
            fontSize="Size90"
            fontWeigth="W900"
            color={`${theme === "Light-Mode" ? "" : "lightGray"}`}
          />
        <p>Front-end Developer.</p>
        </div>
      </div>

      <div
        className={`overlay same4Both ${
          theme === "Light-Mode" ? " " : "almostBlack"
        }`}
        ref={overlayRef}
      >
        <div className="text">
          <div ref={textOverlayRef}>
            <TextEffect
              text1="Welcome to my"
              fontSize="Size90"
              fontWeigth="W900"
              color={`${theme === "Light-Mode" ? "lightGray" : "almostBlack"}`}
            />
            <TextEffect
              text1="visual journey"
              fontSize="Size90"
              fontWeigth="W900"
              color={`${theme === "Light-Mode" ? "lightGray" : "almostBlack"}`}
            />
          </div>
        <p>Front-end Developer.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
