import { useDispatch } from "react-redux";
import { GET_NOW_PLAYING_MOVIE } from "../api/api";
import { options } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const list = await fetch(GET_NOW_PLAYING_MOVIE, options);
    const movies = await list.json();
    dispatch(addnowPlayingMovies(movies.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
