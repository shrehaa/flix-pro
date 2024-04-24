import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Browse from "../Browse/browse";
import Login from "../Login/login";
import { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  
  return (
    <div style={{overflowX:"hidden" }}>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
