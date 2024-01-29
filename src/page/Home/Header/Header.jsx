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

    let size = 7;

    const handleMouseEnter = () => {
      size = 70;
    };
    const handleMouseLeave = () => {
      size = 7;
    };

    textOverlay.addEventListener("mouseenter", handleMouseEnter);
    textOverlay.addEventListener("mouseleave", handleMouseLeave);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(overlay, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        "--size": `${size}px`,
        duration: 0.3,
        ease: "sine.out"
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
            text1="welcome to "
            fontSize="Size90"
            fontWeigth="W900"
            color={`${theme === "Light-Mode" ? "" : "lightGray"}`}
          />
          <TextEffect
            text1="my portfolio."
            fontSize="Size90"
            fontWeigth="W900"
            color={`${theme === "Light-Mode" ? "" : "lightGray"}`}
          />
        </div>
        <p>Front-end Developer.</p>
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
              text1="welcome to "
              fontSize="Size90"
              fontWeigth="W900"
              color={`${theme === "Light-Mode" ? "lightGray" : "almostBlack"}`}
            />
            <TextEffect
              text1="my portfolio."
              fontSize="Size90"
              fontWeigth="W900"
              color={`${theme === "Light-Mode" ? "lightGray" : "almostBlack"}`}
            />
          </div>
        </div>
        <p>Front-end Developer.</p>
      </div>
    </header>
  );
};

export default Header;
