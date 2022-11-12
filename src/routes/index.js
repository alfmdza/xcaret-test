import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../views/Home";

const RoutesComponent = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);

export default RoutesComponent;