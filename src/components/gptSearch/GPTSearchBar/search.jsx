import { Button } from "@mui/material";
import "./search.css";
const Search = () => {
  return (
    <div className="searchbox">
      <input
        className="placehold"
        placeholder={"What would you like to watch today?"}
        name="search"
        // style={{
        //   width: "60%",
        //   borderRadius: "30px",
        //   height: "45%",
        //   textAlign: "center",
        //  marginRight:"30px"
        // }}
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
        Search
      </Button>
    </div>
  );
};

export default Search;
