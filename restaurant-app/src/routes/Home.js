import React from "react";
import HeroSection from "../components/HeroSection";
import Specials from "../components/Specials";
import Footer from "../components/Footer";
import HeaderElement from "../components/HeaderElement";

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <Footer />
    </>
  );
};

export default Home;
