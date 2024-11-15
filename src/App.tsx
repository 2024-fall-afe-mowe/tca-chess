import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


function App() {
  return (
    <div className="App">
      
      <h1 className="text-3xl font-bold underline">
        Chess
      </h1>
      <button className="btn btn-primary">Play</button>
    </div>
  );
}

export default App;