import { useDispatch, useSelector } from "react-redux";
import { GET_POPULAR_MOVIE } from "../api/api";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const list = await fetch(GET_POPULAR_MOVIE, options);
    const movies = await list.json();
    dispatch(addPopularMovies(movies.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
