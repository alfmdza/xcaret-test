import React from 'react';
import RoutesComponent from './routes';
import {

  RouterProvider,

} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <RouterProvider router={RoutesComponent} />
    </div>
  );
}

export default App;
