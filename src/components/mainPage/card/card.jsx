/* eslint-disable react/prop-types */

import { POSTER_URL } from "../../../constants";

const Card = ({ poster }) => {
  const url = `${POSTER_URL}${poster}`;
  return (
    <div style={{padding:"15px"}}>
      <img src={url} alt="poster" height="200px" width="150px" />
    </div>
  );
};

export default Card;
