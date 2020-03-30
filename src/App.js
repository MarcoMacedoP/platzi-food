import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FoodList from "./components/FoodList";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <div
        className="h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)"
        }}
      />
      <Navbar />
      <div className="flex-1">
        <FoodList />
      </div>
      <Footer />
    </main>
  );
}

export default App;
