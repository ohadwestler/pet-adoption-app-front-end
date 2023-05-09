import React from "react";
import UserDetailsForm from "../Components/UserDetailsForm";
export default function LogOut() {

  return (
    <div className="logout">
      <h1 className="text-center"> Adoption App</h1>
      <div className="text-center">
        <div className="card-body">
          <h5 className="card-title">Sign Up / Login now!</h5>
          <p className="card-text ">
            In this project I build a full stack pet adoption platform, with
            search, user/adoption management & admin dashboard.<br></br> The
            goal of this platform is to allow users to sign up, search and adopt
            pets.
          </p>
          <div className="d-flex buttons">
            <UserDetailsForm type="signup" />
            <UserDetailsForm type="login" />
          </div>
        </div>
      </div>
    </div>
  );
}
