import React from "react";
import { style } from "../../constants";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import { POSTER_URL } from "../../constants";

const Trailer = ({ details, handleClose }) => {
  return (
    <Card sx={style}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
              {details.title.split("")[0]}
            </Avatar>
          }
          title={
            <Typography variant="h5" color={"white"}>
              {details.title}
            </Typography>
          }
          subheader={
            <Typography variant="h8" color={"white"}>
              {details.release_date}
            </Typography>
          }
        />
        <ClearIcon
          style={{ cursor: "pointer", color: red[500] }}
          onClick={handleClose}
        />
      </div>
      <CardMedia
        component="img"
        height="194"
        image={`${POSTER_URL}${details.backdrop_path}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          {details.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography color={"white"} variant="h6">
            IMDB Rating: {details.vote_average.toFixed(1)}/10
          </Typography>
          <div>
            {details.vote_average < 3 ? (
              <StarIcon></StarIcon>
            ) : details.vote_average < 7 ? (
              <>
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
              </>
            ) : (
              <>
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
              </>
            )}
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default Trailer;
