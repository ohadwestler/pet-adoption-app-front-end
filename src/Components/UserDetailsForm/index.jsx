import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalForm from "./Modal";
import FormUserData from "./FormUserData";
import { postLogin, postSignUp } from "../../Redux/user/actions/useActions";
import { useDispatch } from "react-redux";

export default function ModalUserDetails({ type }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastName: "",
    confirmPasswad: "",
    phone: "",
  });
  const { email, password, firstname, lastName, confirmPasswad, phone } = userData;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    try {
      if (type === "signup") {
        await dispatch(postSignUp(email, password, firstname, lastName, confirmPasswad, phone));
      } else {
        await dispatch(postLogin(email, password));
      }
      handleClose();
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
        {type === "signup" ? "Sign Up" : "Login"}
      </Button>
      <ModalForm handleSubmit={handleSubmit} show={show} handleClose={handleClose} type={type}>
        <FormUserData userData={userData} setUserData={setUserData} type={type} />
        {error && (
          <Alert className="text-center" variant="danger">
            {error}
          </Alert>
        )}
      </ModalForm>
    </>
  );
}
