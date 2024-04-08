import { useDispatch, useSelector } from "react-redux";
import { GET_TOP_RATED_MOVIE } from "../api/api";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const list = await fetch(GET_TOP_RATED_MOVIE, options);
    const movies = await list.json();
    dispatch(addTopRatedMovies(movies.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopratedMovies;
