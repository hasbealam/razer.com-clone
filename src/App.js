import { AllRoutes } from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored"> </ToastContainer>
      <AllRoutes />
    </div>
  );
}

export default App;