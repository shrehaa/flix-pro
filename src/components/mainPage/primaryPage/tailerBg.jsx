import { useSelector } from "react-redux";
import "./primaryPage.css";

const TrailerBg = () => {
  const trailerId = useSelector(
    (store) => store.movies?.movieTrailer && store.movies.movieTrailer.key
  );
  return (
    <div className="trailerBg">
      <iframe
        style={{ width: "100%", aspectRatio: "16:9", height: "100vh" }}
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?&autoplay=1&mute=1&controls=0&rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      ></iframe>
    </div>
  );
};

export default TrailerBg;
