import React from "react";
export default ({ title, image, desc, price }) => {
  return (
    <section class="md:w-1/2 lg:16 mt-4 flex flex-col md:flex-row md:bg-white md:justify-center  md:shadow-lg md:rounded-md ">
      <img
        class="rounded-lg mb-3 w-full h-full object-cover"
        src={image}
        alt=""
      />
      <div class="p-4 flex flex-col relative -mt-10 bg-white rounded-lg shadow-md max-h-full md:m-0 md:shadow-none">
        <h2 class="text-xl font-medium text-gray-800 ">{title}</h2>
        <p class="text-sm text-gray-600">{desc}</p>
        <div class="text-sm my-2 text-gray-500">{price}</div>
        <div class="text-yellow-500 text-xs">
          &starf;&starf;&starf;&star;&star;
        </div>
      </div>
    </section>
  );
};
