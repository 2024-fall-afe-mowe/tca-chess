import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameResult } from "./game-results";

interface PlayProps {
    numberOfGames: number;
    setNumberOfGames: (n: number) => void;
    addNewGameResult: (gr: GameResult) => void;
}

export const Play: React.FC<PlayProps> = ({
    numberOfGames
    , setNumberOfGames
    , addNewGameResult
}) => {


    const nav = useNavigate();


    return (
        <div>
            <h1
                className='text-2xl font-bold mb-3'
                onClick={
                    () => {
                        setNumberOfGames(numberOfGames + 1);
                        console.log(numberOfGames);
                    }
                }
            >
                Play ({numberOfGames} games played)
            </h1>
            <button
                className="btn btn-primary mb-3"
                onClick={() => {
                    addNewGameResult({
                        startTime: ""
                        , endTime: ""
                        , winner: "Barbie"
                        , player: [
                            "Barbie"
                            , "Ken"
                        ]
                    });
                    nav(-2);
                }}
            >
                Game Over
            </button>
        </div>
    );
};
