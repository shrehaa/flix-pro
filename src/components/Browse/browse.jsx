import Header from "../Header/header";
import "./browse.css";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import usePopularMovies from "../../customHooks/usePopularMovies";
import PrimaryPage from "../mainPage/primaryPage/primaryPage";
import { useSelector } from "react-redux";
import SecondaryPage from "../mainPage/secondaryPage/secondaryPage";
import useTopratedMovies from "../../customHooks/useTopratedMovies";
import useUpcomingMovies from "../../customHooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  const movieList = useSelector((store) => store.movies);
  if (!movieList) return;
  const id = movieList.nowPlayingMovies && movieList.nowPlayingMovies[0].id;

  return (
    <div className="browse-container">
      <Header />
     {id && <PrimaryPage id={id} details={movieList.nowPlayingMovies[1]} />}
     <SecondaryPage/>
     
    </div>
  );
};

export default Browse;
