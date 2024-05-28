import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            class="flex title-font font-bold text-2xl  items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src="/wlogo.png" width={100} alt="" />
            <span class="ml-3 text-2xl">W Career Academy</span>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-center text-gray-900 font-bold text-2xl justify-center">
            <Link to={"/"} class="mr-5 hover:text-blue-400">
              Home
            </Link>
            <Link to={"/about"} class="mr-5 hover:text-blue-400">
              About
            </Link>
            <Link to={"/services"} class="mr-5 hover:text-blue-400">
              Services
            </Link>
            <Link to={"/blog"} class="mr-5 hover:text-blue-400">
              Blog
            </Link>
            <Link to={"/contact"} class="mr-5 hover:text-blue-400">
              Contact Us
            </Link>
          </nav>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to={"/login"}>
              Login
            </Link>
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to={"/signup"}>
              SignUp
            </Link>
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
