export const GET_NOW_PLAYING_MOVIE =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const GET_POPULAR_MOVIE =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const GET_TOP_RATED_MOVIE =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const GET_UPCOMING_MOVIE =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";
export const GET_MOVIE_VIDEO = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos`;
