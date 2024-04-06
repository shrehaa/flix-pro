import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../../utils/userSlice";
import { toggleGPT, setLanguage } from "../../utils/gptSlice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { languages } from "../../languageconst";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useSelector((store) => console.log(store, "store"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lang, setLang] = React.useState("Language");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (name, identifier) => {
    setAnchorEl(null);

    if (typeof name === "string" && typeof identifier === "string") {
      setLang(name);
      dispatch(setLanguage(identifier));
    }
  };
  const user = useSelector((store) => store.user);
  const gptView = useSelector((store) => store.gpt.toggleGPTvalue);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleToggleGPT = () => {
    dispatch(toggleGPT());
  };

  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />

      {user && (
        <div className="logout">
          <p style={{ color: "white", margin: "30px" }}>
            Hello, {user && user.displayName} ! ❤️
          </p>
          {gptView === true && (
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "white" }}
              >
                {lang}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {languages &&
                  languages.map((item) => {
                    return (
                      <MenuItem
                        key={item.identifier}
                        onClick={() => handleClose(item.name, item.identifier)}
                      >
                        {item.name}
                      </MenuItem>
                    );
                  })}
              </Menu>
            </div>
          )}
          <Button
            sx={{
              margin: "60px",
              backgroundColor: "rebeccapurple",
              cursor: "pointer",
              "&:hover": { backgroundColor: "rebeccapurple" },
            }}
            variant="contained"
            onClick={handleToggleGPT}
          >
            {gptView?"Home Page":"GPT Search"}
          </Button>
          <Button
            sx={{
              marginRight: "60px",
              backgroundColor: "#CC0000",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#CC0000" },
            }}
            variant="contained"
            onClick={logOut}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
