import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      element : <Login/>,
      path : '/'
    },
    {
      element : <Browse/>,
      path : '/browse'
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid : uid, email : email, displayName : displayName}));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (<RouterProvider router = {appRouter}/>)
}

export default Body