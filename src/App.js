import "./App.css";
import {HomePage} from "../src/Components/Homepage/HomePage" 
import {Navbar} from "./Components/Navbar";
import { Signup } from "./Components/Signup";
import { Signin } from "./Components/Signin";
import Pc from "./Components/Products/Pc";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <HomePage /> */}
      {/* <Signup /> */}
      {/* <Signin />  */}
      <Pc/>
    </div>
  );
}

export default App;
