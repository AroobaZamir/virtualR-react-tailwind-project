import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-20">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Price />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default App;
