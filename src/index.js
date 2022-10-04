import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/index";

import "./style.css";

export const Index = () => {
  return <App />;
};

ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById("root")
);
