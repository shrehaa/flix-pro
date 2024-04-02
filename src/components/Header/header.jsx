import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const user =  useSelector((store)=>store.user)
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        
      })
      .catch((error) => {
        alert(error);
      });
  };

  console.log(user)
  
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      
      <div className="logout">
      <p style={{color:'white'}}>Hello, {user && user.displayName} ! ❤️ </p>
        <Button
          sx={{
            margin: "60px",
            backgroundColor: "#CC0000",
            "&:hover": { backgroundColor: "#CC0000" },
          }}
          variant="contained"
          onClick={logOut}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
