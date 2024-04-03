import TrailerBg from "./tailerBg";
import useMovieTrailer from "../../../customHooks/useMovieTrailer";
import "./primaryPage.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PrimaryPage = ({ id, details }) => {
  useMovieTrailer(id);
  console.log(details, "deets")
  return (
    <div>
      <div className="details">
        <h1>{details.original_title}</h1>
        <p>
          {details.overview}
        </p>
        <Stack spacing={2} direction="row">
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                border: "none",
                opacity:"80%"
              },
            }}
            variant="contained"
          >
            ▶ Play
          </Button>
          <Button
            sx={{
              backgroundColor: "gray",
              color: "white",
              "&:hover": {
                backgroundColor: "gray",
                color: "white",
                border: "none",
                opacity:'60%'
              },
            }}
            variant="outlined"
          >
            More Info
          </Button>
        </Stack>
      </div>
      <TrailerBg />
    </div>
  );
};

export default PrimaryPage;
