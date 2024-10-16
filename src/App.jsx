// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Cert from "./components/Cert";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-coverr bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Cert/>
        <Feedbacks />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
