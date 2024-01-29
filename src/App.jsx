//react imports
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeSwicth";
import { useEffect, useState } from "react";

// styles
import "./sass/main.sass";

// components imports
import Navbar from "./components/navbar/Navbar";
import Loading from "./components/loading/Loading";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);

  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === "Dark-Mode" ? "Dark-theme" : ""}`}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </div>
  );
}
export default App;
