import React from "react";
export default ({
  title,
  image,
  desc,
  price,
  rating = { qty: 5, stars: 3 }
}) => {
  const activeStars = [...Array(rating.stars)];
  const inactiveStars = [...Array(5 - activeStars.length)];
  return (
    <section className="md:w-1/2 lg:16 mt-4 flex flex-col md:flex-row md:bg-white md:justify-center  md:shadow-lg md:rounded-md ">
      <img
        className="rounded-lg mb-3 w-full h-full object-cover"
        src={image}
        alt=""
      />
      <div className="p-4 flex flex-col relative -mt-10 bg-white rounded-lg shadow-md max-h-full md:m-0 md:shadow-none">
        <h2 className="text-xl font-medium text-gray-800 ">{title}</h2>
        <p className="text-sm text-gray-600">{desc}</p>
        <div className="text-sm my-2 text-gray-500">MXN {price}$</div>
        <div className="flex justify-center flex-col items-start text-sm  ">
          <div>
            {activeStars.map((e, i) => (
              <i className="fa fa-star text-primary" key={i} />
            ))}
            {inactiveStars.map((e, i) => (
              <i className="fa fa-star text-gray-400" key={i} />
            ))}
          </div>
          <span className="text-gray-400 text-xs">{rating.qty} reviews</span>
        </div>
      </div>
    </section>
  );
};
