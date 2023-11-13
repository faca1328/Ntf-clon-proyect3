import { useNavigate } from "react-router-dom"
import video from "../../Assets/Marvel Opening Theme.mp4"

export const Player = () => {

    const navigate = useNavigate();

    return (
        <div className="absolute w-screen h-screen">
            <button onClick={() => navigate(-1)} className="absolute z-40 text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>

            <video src={video} autoPlay loop controls muted className=" w-screen bg-black h-screen">
            </video>
        </div>

    )
}
