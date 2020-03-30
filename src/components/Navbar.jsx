import React from "react";
import logo from "../assets/img/logo.svg";
export default () => {
  return (
    <header
      class="
      flex justify-between items-center
      p-3 w-screen 
      z-50
      fixed top-0 left-0 
      bg-secondary  shadow-2xl"
    >
      <img
        src={logo}
        class="h-6 object-contain cursor-pointer hover:opacity-25 transition-opacity ease-in duration-300"
        alt=""
      />
      <div class="text-white text-2xl cursor-pointer hover:opacity-25 transition-opacity ease-in duration-300 mr-4">
        &equiv;
      </div>
    </header>
  );
};
