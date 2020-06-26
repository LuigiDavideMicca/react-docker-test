import React, { useState } from "react";
import "./App.css";

import logo from "./prometeon.png";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  const [plant, setPlant] = useState("");
  const [tyres, setTires] = useState(0);

  const onPlantChange = (e) => {
    setPlant(e.target.value);
  };

  const onTyreChange = (e) => {
    setTires(e.target.value);
  };

  return (
    <div className="App container">
      <header className="my-5 App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>React Starter with Docker Compose</h4>
        <Form
          onPlantChange={onPlantChange}
          onTyreChange={onTyreChange}
          plant={plant}
          tyres={tyres}
        />
        <Header plant={plant} tyres={tyres} />
      </header>
    </div>
  );
};

export default App;
