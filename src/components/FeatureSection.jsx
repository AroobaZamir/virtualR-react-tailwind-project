import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-15 border border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className=" mt-100 bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase ">
          features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 text-transparent bg-clip-text to-orange-800 ">
            {" "}
            {""}
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((features, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex ">
              <div
                className="flex  mx-6  h-10 w-10 p-2 bg-neutral-900 text-orange-700
              justify-center items-center rounded-full "
              >
                {features.icon}
              </div>
              <div className="felx flex-col">
                <h5 className="mt-1 mb-6 text-xl"> {features.text}</h5>
                <p className=" text-md p-2 mb-10 text-neutral-500 ">
                  {features.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
