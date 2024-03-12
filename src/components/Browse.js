import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("Inside browse");
  const handle = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      console.log(error.message);
    });
  }
  return (
    <div>Browse
      <button onClick={handle}>Sign out</button>
    </div>
  )
}

export default Browse