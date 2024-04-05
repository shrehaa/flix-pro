import { useDispatch } from "react-redux";
import { GET_POPULAR_MOVIE } from "../api/api";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const list = await fetch(GET_POPULAR_MOVIE, options);
    const movies = await list.json();
    dispatch(addPopularMovies(movies.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
