// icons
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

// styles
import "./Navbar.sass";

// react
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeSwicth";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuBtn, setMenuBtn] = useState(false);

  const toggleMenuBtn = () => {
    setMenuBtn(!menuBtn);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <span>J</span>
        </div>
        <ul className={`ul-nav ${menuBtn ? "menu-open" : ""}`}>
          <li>
            <a onClick={() => setMenuBtn(false)} href="#">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setMenuBtn(false)} href="#">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setMenuBtn(false)} href="#">
              Contact
            </a>
          </li>
          <button className="Menu-btn" onClick={toggleMenuBtn}>
            {menuBtn ? <IoCloseSharp /> : <IoMenu />}
          </button>
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === "Light-Mode" ? <FaSun /> : <FaMoon />}
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
