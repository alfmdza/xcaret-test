import React from 'react';
import RoutesComponent from './routes';
import {

  RouterProvider,

} from "react-router-dom";
import { useFetchLanguageInitialQuery } from './redux/api/languages';
import {isMobile} from 'react-device-detect';


function App() {
  const renderContent = () => {
    if (isMobile) {
      return <div className="App">
      <RouterProvider router={RoutesComponent}/>
    </div>
    }
    return <div className="App">
      <RouterProvider router={RoutesComponent}/>
    </div>
  }
  return (
    renderContent()
  );
}

export default App;
