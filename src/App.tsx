import React from "react";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Story from "./pages/Story/Story";
import Roadmap from "./pages/Roadmap/Roadmap";
import Collab from "./pages/Collab/Collab";
import Team from "./pages/Team/Team";
import FAQ from "./pages/Faq/Faq";
import Footer from "./pages/Footer/Footer";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Story />
      <Roadmap />
      <Collab />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
