import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './Home';
import { Setup } from './Setup';
import { Play } from './Play';
import { 
  GameResult
  , getLeaderboard
 } from './game-results';

const dummyGameResults: GameResult[] = [
  {
    startTime: "2024-09-23T15:36:25.123Z"
    , endTime: "2024-09-23T15:46:25.123Z"
    , winner: "Chris B"
    , player: [
      "Chris B"
      , "Caden J"
      , "Peter B"
      , "Swastik A"
      , "Tom"
    ]
  }
  , {
    startTime: "2024-09-23T15:48:25.123Z"
    , endTime: "2024-09-23T15:50:25.123Z"
    , winner: "Tom"
    , player: [
      "Harry"
      , "Hermione"
      , "Ron"
      , "Tom"
    ]
  }
  , {
    startTime: ""
    , endTime: ""
    , winner: "Harry"
    , player: [
      "Harry"
      , "Chris B"
      , "Tom"
    ]
  }
  , {
    startTime: ""
    , endTime: ""
    , winner: "Tom"
    , player: [
      "Tom"
      , "Jack"
    ]
  }
];

const App = () => {

  const [numberOfGames, setNumberOfGames] = useState(15);


  const addNewGameResult = (newResult: GameResult) => setGameResults([
    ...gameResults,
    newResult
  ]);

  const [gameResults, setGameResults] = useState(dummyGameResults);
  // const [gameResults, setGameResults] = useState<GameResult[]>([]);

  const router = createHashRouter([
    {
      path: "/",
      element: <Home
      leaderboardData={getLeaderboard(gameResults)}
        numGames={numberOfGames}
      />,
    },
    {
      path: "/setup",
      element: <Setup />,
    },
    {
      path: "/play",
      element: <Play
        numberOfGames={numberOfGames}
        setNumberOfGames={setNumberOfGames}
        addNewGameResult={addNewGameResult}
      />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  );
}

export default App;