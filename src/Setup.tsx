import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Setup = () => {
    const nav = useNavigate();

    const [playerName, setPlayerName] = useState("");
    const [opponentName, setOpponentName] = useState("");
    const [playerColor, setPlayerColor] = useState("white");
    const [opponentColor, setOpponentColor] = useState("black");
    const [savedPlayers, setSavedPlayers] = useState<string[]>([]);
    const [showPlayerDropdown, setShowPlayerDropdown] = useState(false);
    const [showOpponentDropdown, setShowOpponentDropdown] = useState(false);

    useEffect(() => {
        const savedPlayerName = localStorage.getItem("playerName");
        const savedOpponentName = localStorage.getItem("opponentName");
        if (savedPlayerName) setPlayerName(savedPlayerName);
        if (savedOpponentName) setOpponentName(savedOpponentName);

        const players = Object.keys(localStorage).filter(key => key !== "playerName" && key !== "opponentName");
        setSavedPlayers(players);
    }, []);

    const handleStartGame = () => {
        localStorage.setItem("playerName", playerName);
        localStorage.setItem("opponentName", opponentName);
        nav("/play");
    };

    const handleSelectPlayer = (name: string) => {
        setPlayerName(name);
        setShowPlayerDropdown(false);
    };

    const handleSelectOpponent = (name: string) => {
        setOpponentName(name);
        setShowOpponentDropdown(false);
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
                        value={playerName}
                        onFocus={() => setShowPlayerDropdown(true)}
                        onBlur={() => setTimeout(() => setShowPlayerDropdown(false), 100)}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="input w-full p-2"
                    />
                    {showPlayerDropdown && (
                        <div className="dropdown">
                            {savedPlayers.map((name) => (
                                <div key={name} onClick={() => handleSelectPlayer(name)} className="dropdown-item">
                                    {name}
                                </div>
                            ))}
                        </div>
                    )}
                    <select
                        value={playerColor}
                        onChange={(e) => setPlayerColor(e.target.value)}
                        className="select w-full p-2 mt-2"
                    >
                        <option value="white" disabled={!!(opponentColor === "white" && opponentName)}>White</option>
                        <option value="black" disabled={!!(opponentColor === "black" && opponentName)}>Black</option>
                    </select>
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Player 2 Name"
                        value={opponentName}
                        onFocus={() => setShowOpponentDropdown(true)}
                        onBlur={() => setTimeout(() => setShowOpponentDropdown(false), 100)}
                        onChange={(e) => setOpponentName(e.target.value)}
                        className="input w-full p-2"
                    />
                    {showOpponentDropdown && (
                        <div className="dropdown">
                            {savedPlayers.map((name) => (
                                <div key={name} onClick={() => handleSelectOpponent(name)} className="dropdown-item">
                                    {name}
                                </div>
                            ))}
                        </div>
                    )}
                    <select
                        value={opponentColor}
                        onChange={(e) => setOpponentColor(e.target.value)}
                        className="select w-full p-2 mt-2"
                    >
                        <option value="white" disabled={!!(playerColor === "white" && playerName)}>White</option>
                        <option value="black" disabled={!!(playerColor === "black" && playerName)}>Black</option>
                    </select>
                </div>
                <button
                    className="btn btn-primary w-full p-3 bg-blue-600 text-white rounded-lg"
                    onClick={handleStartGame}
                    disabled={!playerName || !opponentName || playerColor === opponentColor || playerName === opponentName}
                >
                    Start Playing
                </button>

                <AddPlayer setSavedPlayers={setSavedPlayers} savedPlayers={savedPlayers} />
            </div>
        </div>
    );
};

export const AddPlayer = ({ setSavedPlayers, savedPlayers }: { setSavedPlayers: React.Dispatch<React.SetStateAction<string[]>>, savedPlayers: string[] }) => {
    const [newPlayerName, setNewPlayerName] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState("");

    const handleAddPlayer = () => {
        if (newPlayerName) {
            localStorage.setItem(newPlayerName, newPlayerName);
            setNewPlayerName("");
            updateSavedPlayers();
        }
    };

    const handleEditPlayer = (name: string) => {
        setEditMode(true);
        setCurrentPlayer(name);
        setNewPlayerName(name);
    };

    const handleDeletePlayer = (name: string) => {
        localStorage.removeItem(name);
        updateSavedPlayers();
    };

    const updateSavedPlayers = () => {
        const players = Object.keys(localStorage).filter(key => key !== "playerName" && key !== "opponentName");
        setSavedPlayers(players);
    };

    const handleSaveEdit = () => {
        if (currentPlayer && newPlayerName) {
            localStorage.removeItem(currentPlayer);
            localStorage.setItem(newPlayerName, newPlayerName);
            setEditMode(false);
            setNewPlayerName("");
            updateSavedPlayers();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <input
                type="text"
                placeholder="Add New Player Name"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                className="input w-full p-2"
            />
            {editMode ? (
                <button
                    className="btn btn-secondary ml-2"
                    onClick={handleSaveEdit}
                >
                    Save Changes
                </button>
            ) : (
                <button
                    className="btn btn-secondary ml-2"
                    onClick={handleAddPlayer}
                >
                    Add Player
                </button>
            )}
            <table className="mt-4 w-full">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {savedPlayers.map((name) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>
                                <button onClick={() => handleEditPlayer(name)} className="btn btn-edit">Edit</button>
                                <button onClick={() => handleDeletePlayer(name)} className="btn btn-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
