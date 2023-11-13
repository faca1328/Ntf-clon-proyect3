import { useState } from "react";
import video from "../../../Assets/Marvel Opening Theme.mp4";
import { useNavigate } from "react-router-dom";

export const Card = ({ movieData }: any) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative group cursor-pointer max-w-xs h-80"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt="img"
        className="max-w-full h-auto"
      />

      {isHover && (
        <div className="absolute inset-0 flex items-center justify-center text-white h-auto -top-4 max-w-fit opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => navigate(`/player`)}>
          <div className="bg-black bg-opacity-50 max-h-fit">
            <video
              src={video}
              autoPlay
              loop
              muted
              className="w-full h-auto z-50"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl whitespace-nowrap overflow-hidden overflow-ellipsis">
                {movieData.title}
              </h3>
              <p className="mt-2 text-ellipsis overflow-y-scroll h-40 disable-scrollbars px-2"
              >
                {movieData.overview}
              </p>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

