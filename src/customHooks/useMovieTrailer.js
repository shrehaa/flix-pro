import { useDispatch } from "react-redux";
import { GET_MOVIE_VIDEO } from "../api/api";
import { options } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const list = await fetch(GET_MOVIE_VIDEO(id), options);
    const moviesVid = await list.json();

    var tList = moviesVid?.results?.filter((vid) => vid.type === "Trailer");
    var trailer = tList && tList[0];

    if (!trailer) {
      trailer = moviesVid.results && moviesVid.results[0];
    }
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
