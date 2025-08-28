import React from "react";
import { CheckCircle2 } from "lucide-react";
import { features, pricingOptions } from "../constants";
const Price = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap mb-6  ">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-4">
                {option.title}
                {option.title === "Pro" && (
                  <span className=" text-xl bg-gradient-to-r from-orange-500 text-transparent bg-clip-text to-orange-800 ">
                    {"  "}
                    (Most Popular Plan)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-500 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-6 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="px-5 mt-20  inline-flex justify-center items-center tracking-tight w-full h-12  text-xl hover:bg-amber-900  border border-orange-900 transition duration-300"
              >
                {" "}
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
