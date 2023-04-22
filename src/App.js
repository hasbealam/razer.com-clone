import "./App.css";
import {HomePage} from "../src/Components/Homepage/HomePage" 
import {Navbar} from "./Components/Navbar";
import { Signup } from "./Components/Signup";
import { Signin } from "./Components/Signin";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
      {/* <Signup /> */}
      <Signin /> 
    </div>
  );
}

export default App;
