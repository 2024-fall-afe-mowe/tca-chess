import { useNavigate } from "react-router-dom";

interface PlayProps {
  numberOfGames: number;
  setNumberOfGames: (num: number) => void;
  addNewGameResult: (result: any) => void;
}

export const Play: React.FC<PlayProps> = ({ numberOfGames, setNumberOfGames, addNewGameResult }) => {
    const nav = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                <h1 className="text-3xl font-bold mb-5 text-center text-white">CHESS GAME</h1>
                <div className="flex flex-col mb-5">
                    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4 text-center">
                        <p className="text-xl text-white">Player 1 Timer</p>
                        <p className="text-2xl">⏱️ 00:00:00</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg shadow-md text-center">
                        <p className="text-xl text-white">Player 2 Timer</p>
                        <p className="text-2xl">⏱️ 00:00:00</p>
                    </div>
                </div>
                <div className="text-center mb-5">
                    <p className="text-yellow-400 text-lg">🔔 Game In Progress</p>
                    <p className="text-green-400 text-2xl font-semibold">🏆 Checkmate!</p>
                    <p className="text-white text-3xl font-extrabold">Player 1 Wins</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition focus:outline-none border-none">
                        🎮 Pause Game
                    </button>
                    <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition focus:outline-none border-none">
                        ➡️ Next Move
                    </button>
                    <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition focus:outline-none border-none">
                        🏁 End Game
                    </button>
                    <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition focus:outline-none border-none">
                        ✅ Declare Checkmate
                    </button>
                </div>
                <button
                    className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition focus:outline-none border-none mt-4"
                    onClick={() => nav(-2)}
                >
                    Game Over
                </button>
            </div>
        </div>
    );
};
