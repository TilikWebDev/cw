import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/Context/theme";

import App from "./components/App/index";

import "./style.css";
import { EditProvider } from "./components/Context/edit";

export const Index = () => {
  return <App />;
};

ReactDOM.render(
  <EditProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </ThemeProvider>
  </EditProvider>,
  document.getElementById("root")
);
