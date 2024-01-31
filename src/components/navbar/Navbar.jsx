// icons
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

// styles
import "./Navbar.sass";

// react
import { useState, useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeSwicth";

const Navbar = () => {
  const removeMenuOpenRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuBtn, setMenuBtn] = useState(false);

  const toggleMenuBtn = () => {
    setMenuBtn(!menuBtn);
  };
  const closeMenuBtn = () => {
    setMenuBtn(false);
  };

  useEffect(() => {
    const removeMenuOpen = removeMenuOpenRef.current;
    const handleRemoveClass = () => {
      if (window.scrollY > 30) {
        removeMenuOpen.classList.remove("menu-open");
        setMenuBtn(false);
      }
    };

    window.addEventListener("scroll", handleRemoveClass);

    return () => {
      window.removeEventListener("scroll", handleRemoveClass);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <span>J</span>
        </div>
        <ul
          ref={removeMenuOpenRef}
          className={`ul-nav ${menuBtn ? "menu-open" : ""}`}
        >
          <li>
            <a onClick={closeMenuBtn} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={closeMenuBtn} href="#">
              Projects
            </a>
          </li>
          <li>
            <a onClick={closeMenuBtn} href="#">
              Contact
            </a>
          </li>
          <button className="Menu-btn" onClick={toggleMenuBtn}>
            {menuBtn ? <IoCloseSharp /> : <IoMenu />}
          </button>
          <div className="toggle-theme-father" onClick={closeMenuBtn}>
            <button className="toggle-theme" onClick={toggleTheme}>
              {theme === "Light-Mode" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
