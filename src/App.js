import "./App.css";
import { HomePage } from "./Components/HomePage";
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
  return <div className="App">
  </div>;
}

export default App;
