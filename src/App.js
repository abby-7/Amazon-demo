import logo from "./logo.svg"
import "./App.css"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/header"
import Navbar from "./components/Navbar/navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreateAccount from "./components/Login-SignIn/CreateAccount";
import SignInPage from "./components/Login-SignIn/signInPage";
import SignInPasswordPage from "./components/Login-SignIn/signin-password";
import HomePage from "./components/Homepage/homepage";

function App () {
  const [list, setList] = useState([])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signin/password" element={<SignInPasswordPage />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
