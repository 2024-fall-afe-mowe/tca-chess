import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1
      className='text-xl'
      >
        Home 
      </h1>
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
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
      <h1 className="text-3xl font-bold underline">
        Chess
      </h1>
      <button className="btn btn-primary">Play</button>
    </div>
  );
}

export default App;