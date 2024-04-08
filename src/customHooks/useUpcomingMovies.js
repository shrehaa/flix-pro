import { useDispatch, useSelector } from "react-redux";
import { GET_UPCOMING_MOVIE } from "../api/api";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const list = await fetch(GET_UPCOMING_MOVIE, options);
    const movies = await list.json();
    dispatch(addUpcomingMovies(movies.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
