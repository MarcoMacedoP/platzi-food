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
    <section
      className="
      flex flex-col mb-2 
      md:w-2/6 md:mx-2
      lg:w-3/12 
      "
    >
      <img
        className="rounded-lg mb-3 w-full h-full object-cover 
        lg:max-h-40 "
        src={image}
        alt=""
      />
      <div className="p-4 flex flex-col relative -mt-10 bg-white rounded-lg shadow-md max-h-full ">
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
