import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "../../routes/routes";

const AppContainer = () => {
  const routing = useRoutes(routes);

  return <App routing={routing} />;
};

const App = ({ routing }) => {
  return <div className={"wrapper"}>{routing}</div>;
};

export default React.memo(AppContainer);
