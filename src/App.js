import React, { useState, useEffect } from "react";
import "./App.css";
import {HomePage} from "../src/Components/Homepage/HomePage" 
import {Navbar} from "./Components/Navbar";
import { Signup } from "./Components/Signup";
import { Signin } from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HamBurger } from "./Components/HamBurger";

function App() {
  const [showHamBurger, setShowHamBurger] = useState(window.innerWidth < 1280);

  useEffect(() => {
    function handleResize() {
      setShowHamBurger(window.innerWidth < 1280);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      {showHamBurger ? <HamBurger /> : <Navbar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
  return <div className="App">
  </div>;
}

export default App;
