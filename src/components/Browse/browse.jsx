import Header from "../Header/header";
import "./browse.css";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import PrimaryPage from "../mainPage/primaryPage/primaryPage";
import { useSelector } from "react-redux";
import SecondaryPage from "../mainPage/secondaryPage/secondaryPage";

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
     <SecondaryPage/>
     
    </div>
  );
};

export default Browse;
