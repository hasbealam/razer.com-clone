import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Theme from "./Components/Theme";
import "@fontsource/titillium-web/400.css";
import {BrowserRouter} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={Theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);

