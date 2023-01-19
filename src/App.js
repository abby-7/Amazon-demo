import logo from "./logo.svg"
import "./App.css"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/header"
import Navbar from "./components/Navbar/navbar"

function App () {
  const [list, setList] = useState([])
  return (
    <div className="App">
      <Header />
      <Navbar />
      <span> 123</span>
    </div>
  )
}

export default App
