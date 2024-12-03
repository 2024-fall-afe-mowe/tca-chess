import { useNavigate } from "react-router-dom";
import { LeaderboardEntry } from "./game-results";

interface HomeProps {
    numGames: number;
    leaderboardData: LeaderboardEntry[];
}

export const Home: React.FC<HomeProps> = ({
    numGames: foo,
    leaderboardData
}) => {
    const nav = useNavigate();

    return (
        <div className="text-white p-5">
            <h1 className='text-4xl font-bold mb-5 text-center'>
                CHESS GAME
            </h1>
            <div className="border-t border-white my-5"></div>
            <p className='text-center text-lg mb-5'>
                Welcome to Chess!
            </p>
            <button
                className="btn btn-primary mx-auto block"
                onClick={() => nav("/setup")}     
            >
                ▶️ Play
            </button>
            <div className="card bg-base-100 shadow-xl">
                <h2 className="card-title">Leaderboard</h2>
                {
                    leaderboardData.length > 0
                        ? (
                            <table className="table table-zebra">
                                <thead>
                                   <tr>
                                        <th>W</th>
                                        <th>L</th>
                                        <th>AVG</th>
                                        <th></th>
                                   </tr> 
                                </thead>
                                <tbody>
                                    {
                                        leaderboardData.map(x => (
                                            <tr key={x.name}>
                                                <td>{x.wins}</td>
                                                <td>{x.losses}</td>
                                                <td>{x.avg}</td>
                                                <td>{x.name}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                        : (
                            <p>Play a game to see the Leaderboard!</p>
                        )
                }
            </div>
        </div>
    );
};
