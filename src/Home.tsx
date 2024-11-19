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

console.log(leaderboardData);

const nav = useNavigate();

    return (
        <div>
            <h1
                className='text-2xl font-bold mb-3'
            >
                Home ({foo} games played)
            </h1>
            <button
                className="btn btn-primary mb-3"
                onClick={() => nav("/setup")}     
            >
                Play
            </button>
        </div>
    );
};
