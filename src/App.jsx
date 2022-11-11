import React from "react";
import { Route, Routes } from "react-router-dom";
import PageContainer from "./layouts/PageContainer";
import routes from "./utilities/routes";

const App = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          element={<PageContainer Page={route} />}
          key={index}
        />
      ))}
    </Routes>
  );
};

export default App;
