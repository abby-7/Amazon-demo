import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header/header";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
