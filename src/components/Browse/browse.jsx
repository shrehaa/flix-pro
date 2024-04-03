import Header from "../Header/header";
import "./browse.css";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import useMovieTrailer from "../../customHooks/useMovieTrailer";
import PrimaryPage from "../mainPage/primaryPage/primaryPage";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();

  const movieList = useSelector((store) => store.movies);
  if (!movieList) return;
  const id = movieList.nowPlayingMovies && movieList.nowPlayingMovies[0].id;
  console.log(id)

  return (
    <div className="browse-container">
      <Header />
     {id && <PrimaryPage id={id} details={movieList.nowPlayingMovies[0]} />}
    </div>
  );
};

export default Browse;
