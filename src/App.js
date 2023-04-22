import "./App.css";
import { HomePage } from "./Components/HomePage";
import {Navbar} from "./Components/Navbar";
import { Signup } from "./Components/Signup";
import { Signin } from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </div>
  );
}

export default App;
