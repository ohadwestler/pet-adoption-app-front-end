import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FormUserData from "../Components/UserDetailsForm/FormUserData";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../Redux/user/actions/useActions";

export default function Settings() {
  const { userDetails } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initialUserData = { ...userDetails };
  delete initialUserData.hash;
  delete initialUserData.message;
  delete initialUserData.role;

  const [userData, setUserData] = useState(initialUserData);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await dispatch(updateUser(userData));
      alert("updated!");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <div className="p-4">
      <FormUserData
        userData={userData}
        type="update"
        setUserData={setUserData}
      />
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Update
      </Button>
    </div>
  );
}
