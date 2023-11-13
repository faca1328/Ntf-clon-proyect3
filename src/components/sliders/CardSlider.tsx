import { useRef, useState } from "react";
import { Card } from "./Card";

interface Props {
  data: any;
  title: string;
}

export const CardSlider: React.FC<Props> = ({ data, title }) => {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDirection = (direction: "left" | "right") => {
    const cardWidth = sliderRef.current?.querySelector('.max-w-xs')?.clientWidth || 0;
    const totalCards = data.length;
    const visibleCards = 6;
    const maxSliderPosition = cardWidth * (totalCards - visibleCards);

    if (direction === "left") {
      setSliderPosition((prev) => Math.max(0, prev - cardWidth));
    } else {
      setSliderPosition((prev) => Math.min(maxSliderPosition, prev + cardWidth));
    }
  };

  return (
    <div
      className="py-7 relative"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1 className="text-white ml-5 mb-5 text-3xl font-semibold">{title}</h1>
      <div className="flex gap-5 mx-3 relative overflow-hidden">
        <button
          className={`${!showControls ? "hidden" : ""} items-center text-white absolute z-50 top-2/4 bg-gradient-to-r from-black to-transparent p-4`}
          onClick={() => handleDirection("left")}
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div
          ref={sliderRef}
          className="flex gap-3 transition-transform duration-300 ease-in-out min-w-card"
          style={{ transform: `translateX(-${sliderPosition}px)` }}
        >
          {data.map((movie:any) => (
            <Card movieData={movie} key={movie.id} />
          ))}
        </div>
        <button
          className={`${!showControls ? "hidden" : ""} items-center text-white absolute z-50 top-2/4 right-0 bg-gradient-to-l from-black to-transparent p-4`}
          onClick={() => handleDirection("right")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};


