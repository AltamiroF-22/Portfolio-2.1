/* eslint-disable no-undef */
// styles
import "./Header.sass";
// components
import TextEffect from "../../../components/textEffect/TextEffect";

// react components
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeSwicth";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current
    
    window.addEventListener('mousemove',(e)=> {
      const {clientX, clientY} = e;
      const x = Math.round((clientX / window.innerWidth) * 100)
      const y = Math.round((clientY / window.innerHeight) * 100)

      gsap.to(overlay, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
      })
    })

  }, []); 

  return (
    <header>
      <div className="same4Both">
       <div className="text">
       <TextEffect
          text1="welcome to "
          fontSize="Size90"
          fontWeigth="W800"
        />
       <TextEffect
          text1="my portfolio."
          fontSize="Size90"
          fontWeigth="W800"
        />
       </div>
        <p>Front-end Developer.</p>
      </div>

      <div className="overlay same4Both" ref={overlayRef}>
       <div className="text">
       <TextEffect
          text1="welcome to "
          fontSize="Size90"
          fontWeigth="W800"
          color={`${theme === "Dark-Mode" ? "almostBlack" : "lightGray"}`}
        />
       <TextEffect
          text1="my portfolio."
          fontSize="Size90"
          fontWeigth="W800"
          color={`${theme === "Dark-Mode" ? "almostBlack" : "lightGray"}`}
        />
       </div>
        <p>Front-end Developer.</p>
      </div>
    </header>
  );
};

export default Header;
