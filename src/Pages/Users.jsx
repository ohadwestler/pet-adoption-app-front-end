import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Redux/user/actions/useActions";
import { userClicked } from "../Redux/user/actions/useActions";
import UserTable from "../Components/UserTable";

export default function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.auth);

  function displayUser(user) {
    navigate("/userdetails");
    dispatch(userClicked(user));
  }

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="users overflow-auto m-3">
      <UserTable users={allUsers} onUserClick={displayUser} />
    </div>
  );
}
