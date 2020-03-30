import React from "react";
import foods from "../assets/food.data";

import FoodCard from "./FoodCard";

export default () => {
  return (
    <div
      className="p-6 mt-2 flex flex-col justify-center items-center
            md:flex-wrap md:flex-row"
    >
      {foods.map(food => (
        <FoodCard
          key={food.id}
          desc={food.desc}
          title={food.title}
          price={food.price}
          image={food.image}
          rating={food.rating}
        />
      ))}
    </div>
  );
};
