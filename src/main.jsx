import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/main.sass";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages-routes
import Home from "./routes/Home.jsx";
import E404Rout from "./routes/E404.jsx";

//Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <E404Rout /> }
    ]
  }
]);

//theme provider
import { ThemeProvider } from "./context/ThemeSwicth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
