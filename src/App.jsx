import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Career from "./components/Career";

import { ResponsiveProvider } from "./lib/ResponsiveProvider";

library.add(fab, fas);

function App() {
  return (
    <ResponsiveProvider>
      <>
        <Header />
        <AboutMe />
        <Skills />
        <Career />
      </>
    </ResponsiveProvider>
  );
}

export default App;
