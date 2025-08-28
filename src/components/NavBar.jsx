import React from "react";
import logo from "../assets copy/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Workflow from "./WorkFlow";
import Testimonials from "./Testimonial";
import Pricing from "./Price";
const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-10 py-3 backdrop-blur-lg border-b text-white border-neutral-700/80">
      <div className="container px-2 mx-auto relative text-sm text-white">
        <div className="flex justify-between items-center ">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-13 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}> {item.label} </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign-in
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 rounded-md "
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex justify-end flex-col">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="p-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign in
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 rounded-md p-7"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
