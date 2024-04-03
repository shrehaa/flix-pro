import { useSelector } from "react-redux";
import './primaryPage.css';

const TrailerBg = () => {
  const trailerId = useSelector(
    (store) => store.movies?.movieTrailer && store.movies.movieTrailer.key
  );
  return (
    <div className="trailerBg">
      <iframe
        style={{width:'100vw', aspectRatio:'16/9'}}
        src={"https://www.youtube.com/embed/" + trailerId +"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      ></iframe>
    </div>
    
  );
};

export default TrailerBg;
