export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_REACT_TMDB_KEY,
  },
};

 export const OPEN_AI_KEY = import.meta.env.VITE_REACT_OPEN_AI_KEY;
console.log(import.meta.env, "key")