import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";

export default function LogOut() {
  return (
    <>
      <h1 className="text-center mb-5"> Adopption App</h1>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Sign Up / Login now!</h5>
          <p className="card-text ">
            In this project I build a full stack pet adoption platform, with
            search, user/adoption management & admin dashboard. The goal of this
            platform is to allow users to sign up, search and adopt pets.
          </p>
          <div className="d-flex buttons">
          <SignUp />
          <Login />
          </div>
        </div>
      </div>
    </>
  );
}
