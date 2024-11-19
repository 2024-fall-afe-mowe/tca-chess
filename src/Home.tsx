import { useNavigate } from "react-router-dom";

export const Home = () => {
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
        </div>
    );
};
