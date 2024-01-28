/* eslint-disable no-undef */
// components
import TextEffect from "../../../components/textEffect/TextEffect";

// react components
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeSwicth";

// styles
import "./Header.sass";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const overlayRef = useRef(null);

  useEffect(() => {
    // clip path overlay animation/ position
    const overlay = overlayRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(overlay, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.3,
        ease: "sine.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener
    return () => {
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
            cursor="CN"
          />
          <TextEffect
            text1="my portfolio."
            fontSize="Size90"
            fontWeigth="W900"
            color={`${theme === "Light-Mode" ? "" : "lightGray"}`}
            cursor="CN"

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
          <TextEffect
            text1="welcome to "
            fontSize="Size90"
            fontWeigth="W900"
            color={`${theme === "Light-Mode" ? "lightGray" : "almostBlack"}`}
            cursor="CN"
          />
          <TextEffect
            text1="my portfolio."
            fontSize="Size90"
            fontWeigth="W900"
            color={`${theme === "Light-Mode" ? "lightGray" : "almostBlack"}`}
            cursor="CN"
          />
        </div>
        <p>Front-end Developer.</p>
      </div>
    </header>
  );
};

export default Header;
