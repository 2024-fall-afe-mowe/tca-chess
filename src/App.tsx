import React, { useState, useEffect } from 'react';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './Home';
import { Setup } from './Setup';
import { Play } from './Play';
import { GameResult, getLeaderboard } from './game-results';

const App = () => {
  const [gameResults, setGameResults] = useState<GameResult[]>([]);
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  // Load game results from localStorage on mount
  useEffect(() => {
    const storedResults = localStorage.getItem("gameResults");
    if (storedResults) {
      const parsedResults: GameResult[] = JSON.parse(storedResults);
      setGameResults(parsedResults);
      setLeaderboardData(getLeaderboard(parsedResults));
    }
  }, []);

  // Update localStorage whenever gameResults change
  useEffect(() => {
    localStorage.setItem("gameResults", JSON.stringify(gameResults));
    setLeaderboardData(getLeaderboard(gameResults));
  }, [gameResults]);

  const addNewGameResult = (result: GameResult) => {
    setGameResults(prev => [...prev, result]);
  };

  const router = createHashRouter([
    {
      path: "/",
      element: <Home numGames={gameResults.length} leaderboardData={leaderboardData} />,
    },
    {
      path: "/setup",
      element: <Setup />,
    },
    {
      path: "/play",
      element: <Play 
                  numberOfGames={gameResults.length} 
                  setNumberOfGames={() => {}} 
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