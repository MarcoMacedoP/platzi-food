import React from "react";
import logo from "../assets/img/logo.svg";
export default () => {
  const [isSearchShowed, setIsSearchShowed] = React.useState(false);
  return (
    <header
      className="navbar md:px-12"
      style={{ height: isSearchShowed ? "7rem" : "4rem" }}
    >
      <nav
        className="flex w-full transi justify-between h-full items-center
      "
      >
        <img
          src={logo}
          className="h-6 object-contain cursor-pointer hover:opacity-25 transition-opacity ease-in duration-300"
          alt=""
        />
        <div
          onClick={() => setIsSearchShowed(!isSearchShowed)}
          className="text-white text-2xl cursor-pointer hover:opacity-25  transition-opacity ease-in duration-300 mr-4"
        >
          {isSearchShowed ? (
            <i class="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars" />
          )}
        </div>
      </nav>

      <form
        style={{
          opacity: isSearchShowed ? 1 : 0,
          height: isSearchShowed ? "4rem" : 0
        }}
        className="mt-2 flex transition-all  duration-200 ease-out overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search nice food"
          className="py-1 px-2 text-gray-900 rounded-lg text-sm border-b-4 border-transparent transition transition-colors duration-200 ease-in
           focus:border-primary
           transition-opacity duration-200 ease-linear 
          "
        />
        <button
          type="submit"
          className="rounded-md flex hover:opacity-50 transition-opacity duration-200 ease-linear justify-center items-center bg-primary w-12 h-8 ml-2"
        >
          <i className="fa fa-search text-white" />
        </button>
      </form>
    </header>
  );
};
