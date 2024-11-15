import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './Home';
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/setup",
    element: <div>Setup</div>,
  },
  {
    path: "/play",
    element: <div>Play</div>,
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  );
}

export default App;