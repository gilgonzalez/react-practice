import React from "react";
import ReactDOM from "react-dom/client";
import HeroesApp from "./HeroesApp.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <GifApp /> */}
    <HeroesApp />
  </React.StrictMode>
);
