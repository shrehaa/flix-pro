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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;