import "./login.css";
import logo from "../../assets/logo.png";
import { useState, useRef } from "react";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { addUser, removeUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import Header from "../Header/header";

const Login = () => {
  const [toggleForm, setToggleForm] = useState(1);
  const [errMsg, seterrmsg] = useState("");

  const email = useRef();
  const name = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const validation = (email, password) => {
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!email.match(emailRegex)) {
      seterrmsg("Please enter valid email");
      return false;
    }
    if (!password.match(passRegex)) {
      seterrmsg("Please enter valid password");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email.current.value)
    // console.log(password.current.value)
    var validate = validation(email.current.value, password.current.value);
    if (!validate) return;
    if (toggleForm === 0) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
            })
            .catch((error) => {
              console.log(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorMessage);
          // ..
        });

      return;
    }

    if (toggleForm === 1) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorMessage);
        });
      return;
    }
  };

  return (
    <div className="login-container">
      <div className="left-bg">
        {/* <div className="header">
          <img src={logo} alt="logo" className="logo" />
        </div> */}
        <Header />

        {toggleForm ? (
          <div className="form" onSubmit={(e) => handleSubmit(e)}>
            <p>
              Don't have an account?
              <a onClick={() => setToggleForm(0)} style={{ marginLeft: "5px" }}>
                Sign Up
              </a>
            </p>
            <h2>Login</h2>
            <form className="form-main">
              <div className="input-box">
                <input
                  name="loginMail"
                  type="text"
                  className="input-field"
                  placeholder="Username or Email"
                  ref={email}
                />
              </div>
              <div className="input-box">
                <input
                  name="loginPass"
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  ref={password}
                />
              </div>
              {errMsg}
              <div className="input-box">
                <input type="submit" className="submit" value="Sign In" />
              </div>
            </form>
          </div>
        ) : (
          <div className="form">
            <p>
              Already have an account?
              <a
                onClick={() => {
                  setToggleForm(1);
                }}
                style={{ marginLeft: "5px" }}
              >
                Login
              </a>
            </p>
            <h2>Sign Up</h2>
            <form className="form-main" onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  name="signupname"
                  type="text"
                  className="input-field"
                  ref={name}
                  placeholder="Name"
                />
              </div>
              <div className="input-box">
                <input
                  name="signupMail"
                  type="text"
                  className="input-field"
                  placeholder="Username or Email"
                  ref={email}
                />
              </div>
              <div className="input-box">
                <input
                  name="signuppass"
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  ref={password}
                />
              </div>
              {errMsg}
              <div className="input-box">
                <input type="submit" className="submit" value="Sign Up" />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
