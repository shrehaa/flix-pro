import Header from "../Header/header";
import "./browse.css";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="browse-container">
      <Header />
    </div>
  );
};

export default Browse;
