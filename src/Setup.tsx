import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Setup = () => {

    const nav = useNavigate();
    
    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");
    const [player1Color, setPlayer1Color] = useState("white");
    const [player2Color, setPlayer2Color] = useState("black");

    const handleStartGame = () => {
        nav("/play");
    };

    return (
        <div className="flex items-center justify-center">
            <div className="p-8 rounded-lg w-96 border border-gray-400">
                <h1 className='text-4xl font-bold mb-6 text-center'>
                    Setup
                </h1>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Player 1 Name"
                        value={player1Name}
                        onChange={(e) => setPlayer1Name(e.target.value)}
                        className="input w-full p-2"
                    />
                    <select
                        value={player1Color}
                        onChange={(e) => setPlayer1Color(e.target.value)}
                        className="select w-full p-2 mt-2"
                    >
                        <option value="white" disabled={!!(player2Color === "white" && player2Name)}>White</option>
                        <option value="black" disabled={!!(player2Color === "black" && player2Name)}>Black</option>
                    </select>
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Player 2 Name"
                        value={player2Name}
                        onChange={(e) => setPlayer2Name(e.target.value)}
                        className="input w-full p-2"
                    />
                    <select
                        value={player2Color}
                        onChange={(e) => setPlayer2Color(e.target.value)}
                        className="select w-full p-2 mt-2"
                    >
                        <option value="white" disabled={!!(player1Color === "white" && player1Name)}>White</option>
                        <option value="black" disabled={!!(player1Color === "black" && player1Name)}>Black</option>
                    </select>
                </div>
                <button
                    className="btn btn-primary w-full p-3 bg-blue-600 text-white rounded-lg"
                    onClick={handleStartGame}
                    disabled={!player1Name || !player2Name || player1Color === player2Color || player1Name === player2Name}
                >
                    Start Playing
                </button>
            </div>
        </div>
    );
};
