import { CardSlider } from "./CardSlider"

interface Props{
    movies: any;
}

export const Sliders: React.FC<Props> = ({movies}) => {

    const rangeOfMovies = (from: number, to: number) => {
        return movies.slice(from, to)
    }



    return (
      <div>
        <CardSlider title="Trending now" data={rangeOfMovies(0,10)} />
        <CardSlider title="Recomended" data={rangeOfMovies(10,20)} />
        <CardSlider title="Discover" data={rangeOfMovies(20,30)} />
        </div>
    )
  }
  