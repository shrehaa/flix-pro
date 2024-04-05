import CardList from "../cardList/cardList";
import "./secondary.css";
import { useSelector } from "react-redux";

const SecondaryPage = () => {

  const popMovies = useSelector((s) => s.movies.nowPlayingMovies);
  const popularMovies = useSelector((s) => s.movies.popularMovies);
  const topRatedMovies = useSelector((s) => s.movies.topRatedMovies);
  const upcomingMovies = useSelector((s) => s.movies.upcomingMovies);
  return (
    <div className="secondary-container">
      <CardList title={"Now Playing"} movies={popMovies} />
      <CardList title={"Popular"} movies={popularMovies} />
      <CardList title={"Top Rated"} movies={topRatedMovies} />
      <CardList title={"Upcoming"} movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryPage;
