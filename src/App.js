import React from "react";
import DisplayHadirin from "./components/DisplayHadirin";
import FormAddHadirin from "./components/FormAddHadirin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FormAddHadirin />
        <DisplayHadirin />
      </div>
    </div>
  );
}

export default App;
