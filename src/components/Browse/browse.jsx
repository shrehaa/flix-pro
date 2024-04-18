import Header from "../Header/header";
import "./browse.css";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import usePopularMovies from "../../customHooks/usePopularMovies";
import PrimaryPage from "../mainPage/primaryPage/primaryPage";
import { useSelector } from "react-redux";
import SecondaryPage from "../mainPage/secondaryPage/secondaryPage";
import useTopratedMovies from "../../customHooks/useTopratedMovies";
import useUpcomingMovies from "../../customHooks/useUpcomingMovies";
import GptSearch from "../gptSearch/gptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  const movieList = useSelector((store) => store.movies);
  const gptView = useSelector((store) => store.gpt.toggleGPTvalue);
  if (!movieList) return;
  const id = movieList.nowPlayingMovies && movieList.nowPlayingMovies[0].id;

  return (
    <div className="browse-container">
      <Header />
      {gptView === true ? (
        <GptSearch />
      ) : (
        <div>
          {id && (
            <PrimaryPage id={id} details={movieList.nowPlayingMovies[0]} />
          )}
          <SecondaryPage />
        </div>
      )}
    </div>
  );
};

export default Browse;
