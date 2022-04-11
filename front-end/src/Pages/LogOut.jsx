import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import { Navigate, useNavigate } from "react-router-dom";

export default function LogOut({setAuth, setDataOfUser, auth}) {


  
  return (
    <>
      <h1 className="text-center mb-5"> Adoption App</h1>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Sign Up / Login now!</h5>
          <p className="card-text ">
            In this project I build a full stack pet adoption platform, with
            search, user/adoption management & admin dashboard.<br></br> The goal of this
            platform is to allow users to sign up, search and adopt pets.
          </p>
          <div className="d-flex buttons">
          <SignUp setDataOfUser = {setDataOfUser} setAuth = {setAuth}/>
          <Login setAuth = {setAuth} setDataOfUser = {setDataOfUser}/>
                
          </div>
        </div>
      </div>
    </>
  );
}
