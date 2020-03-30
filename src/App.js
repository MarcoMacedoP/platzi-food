import React from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Card
        desc="lorem ipsum"
        title="Hamburguer"
        price="22.65"
        image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80"
      />

      <div className="App"></div>
    </>
  );
}

export default App;
