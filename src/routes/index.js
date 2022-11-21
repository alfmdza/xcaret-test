import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../views/Home";

const RoutesComponent = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/es",
        element: <Home/>,
      },
      {
        path: "/en",
        element: <Home/>,
      },
    ],
  },
    
  ]);

export default RoutesComponent;