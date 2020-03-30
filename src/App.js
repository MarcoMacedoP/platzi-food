import React from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import foods from "./assets/food.data";

function App() {
  return (
    <>
      <Navbar />
      {foods.map(food => (
        <Card
          desc={food.desc}
          title={food.title}
          price={food.price}
          image={food.image}
          rating={food.rating}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
