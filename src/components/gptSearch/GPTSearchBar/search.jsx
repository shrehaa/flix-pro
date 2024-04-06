import { Button } from "@mui/material";
import "./search.css";
import { useSelector } from "react-redux";
import { lang } from "../../../languageconst";

const Search = () => {
  const languageSelected = useSelector((store) => store.gpt.gptLanguage);
  return (
    <div className="searchbox">
      <input
        className="placehold"
        placeholder={lang[languageSelected].placeholder}
        name="search"
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
      >
        {lang[languageSelected].search}
      </Button>
    </div>
  );
};

export default Search;
