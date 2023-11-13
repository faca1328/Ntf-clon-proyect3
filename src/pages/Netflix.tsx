import { useEffect, useState } from "react"
import { NetflixPageNB } from "../components/header/NetflixPageNB";
import mainMovieImg from "../../Assets/home.jpg"
import titleMovieImg from "../../Assets/homeTitle.webp"
import { useNavigate } from "react-router-dom";
import { useAppDipatch, useAppSelector } from "../store";
import { getCategory, getMovies } from "../store/movieAPI/slice";
import { Sliders } from "../components/sliders/Sliders";


export const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const dispatch = useAppDipatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getMovies())
    
  }, [])
  
  const movies  = useAppSelector((state)=> state.netflix.movies)
  if (movies.length <= 0) return null;




  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? true : false);
    return () => (window.onscroll = null);
  };


  return (
    <div className="bg-black">
      <div className="z-40 absolute">
        <NetflixPageNB isScrolled={isScrolled} />
      </div>

      <img src={mainMovieImg} alt="mainMovieImg" className="brightness-75 z-0"/>
      
        <div className="absolute custom-top px-5">
          <img src={titleMovieImg} alt="titleMovieImg" />
          <button className="text-white mt-4 mr-5" onClick={()=>navigate(`/player`)}> Play ▶</button>
          <button className="text-white mt-4"> More Info ❕</button>
        </div>

      <Sliders movies={movies}/>
    </div>
  )
}
