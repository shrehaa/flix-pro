import { Button } from "@mui/material";
import "./search.css";
import { useSelector } from "react-redux";
import { lang } from "../../../languageconst";
import { useRef, useState } from "react";
import openai from "../../../utils/openai";
import { GET_SEARCH_MOVIE } from "../../../api/api";
import { options } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTResults } from "../../../utils/gptSlice";
import CircularProgress from '@mui/material/CircularProgress';

const Search = () => {
  const languageSelected = useSelector((store) => store.gpt.gptLanguage);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const getTMDBSearch = async (movie) => {
    const apiData = await fetch(GET_SEARCH_MOVIE(movie), options);
    const result = await apiData.json();
    return result;
  };

  const handleGPTSearch = async () => {
    setLoad(true);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      " . Only give me names of 6 movies, comma seperated like the example result given ahead. Example result : Don, Mai Khiladi Tu Anadi, Golmaal, Hera Pheri, Chup Chup Ke";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const GPTResults = chatCompletion.choices?.[0].message.content.split(",");

    const PromiseArray = GPTResults.map((movie) => getTMDBSearch(movie));
    const tmdbResults = await Promise.all(PromiseArray);
    dispatch(addGPTResults(tmdbResults));
    setLoad(false);
    
  };

  return (
    <div className="searchbox">
      <input
        className="placehold"
        placeholder={lang[languageSelected].placeholder}
        name="search"
        ref={searchText}
      />
      <Button
        variant="contained"
        sx={{
          height: "40px",
          width: "200px",
          backgroundColor: "rebeccapurple",
          cursor: "pointer",
          "&:hover": { backgroundColor: "rebeccapurple" },
        }}
        onClick={handleGPTSearch}
      >
        {lang[languageSelected].search}
      </Button>
      {load && <CircularProgress sx={{padding:"30px", color:"red"}} />}
    </div>
  );
};

export default Search;
