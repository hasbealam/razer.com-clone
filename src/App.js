import "./App.css";
import {HomePage} from "../src/Components/Homepage/HomePage" 
// import {Navbar} from "./Components/Navbar";
// import { Signup } from "./Components/Signup";
// import { Signin } from "./Components/Signin";

import { AllRoutes } from "./Routes/AllRoutes";



function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
