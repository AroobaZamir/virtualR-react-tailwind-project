import video1 from "../assets copy/video1.mp4";
import video2 from "../assets copy/video2.mp4";

import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-4">
      <h1 className="text-4xl sm:text-6xl lg:text:7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for <br /> developers
        </span>
      </h1>
      <p className="mt-7  text-center text-lg text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with out
        intutive development tools. Get started today and turn your imagination
        into immersive reality.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r  from-orange-500 to-red-600 pc-4 mx-3 rounded-md p-1.5"
        >
          Start for free
        </a>
        <a href="#" className="py-2 px-4 rounded-md border ml-2 ">
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-6">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow shadow-orange-200 mx-4 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag
        </video>

        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow shadow-orange-200 mx-4 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
