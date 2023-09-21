import React, { useEffect } from "react";
// import HeroSection from "./components/HeroSection";
import Hero from "./components/Hero";
import { useGlobalContext } from "./context";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  // return <HeroSection />;
  return <Hero />;
};

export default About;