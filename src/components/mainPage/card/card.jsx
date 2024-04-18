/* eslint-disable react/prop-types */

import { POSTER_URL } from "../../../constants";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Trailer from "../../Trailer/trailer";

const Card = ({ item }) => {
  const url = `${POSTER_URL}${item.poster_path}`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ padding: "15px", cursor: "pointer" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Trailer details={item} handleClose={handleClose} />
      </Modal>
      <img
        onClick={() => handleOpen()}
        src={url}
        alt="poster"
        height="200px"
        width="150px"
      />
    </div>
  );
};

export default Card;
