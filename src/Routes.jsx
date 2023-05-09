import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Settings from "./Pages/UpdateUser";
import Pets from "./Pages/AllPets";
import Users from "./Pages/Users";
import AddPet from "./Pages/AddPet";
import Search from "./Pages/Search";
import UpdatePet from "./Pages/UpdatePet";
import ShowPet from "./Pages/ShowPet";
import MyPets from "./Pages/MyPets";
import UserDetails from "./Pages/UserDeatails";
import LogOut from "./Pages/LogOutHome";
import HomeLogin from "./Pages/LoginHome";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "universal-cookie";
import { fetchAuth, stopAuthLoading } from "./Redux/user/actions/useActions";
import { Spinner } from "react-bootstrap";
function AppRoutes() {
  const {
    userDetails: user,
    loading: authLoading,
    loadingSpinner,
  } = useSelector((state) => state.auth);
  const { loadingPets } = useSelector((state) => state.pets);
  axios.defaults.withCredentials = true;
  const cookies = new Cookies();
  const token = cookies.get("access-token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(fetchAuth());
    else dispatch(stopAuthLoading());
  }, []);

  if (authLoading && !user) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="grow" variant="secondary" />
      </div>
    );
  } else
    return (
      <>
        {loadingSpinner || loadingPets ? (
          <div className="d-flex justify-content-center ">
            <Spinner animation="grow" variant="secondary" />
          </div>
        ) : (
          ""
        )}
        <Routes>
          <Route path="*" element={!user ? <LogOut /> : <HomeLogin />} />
          <Route path="/search" element={<Search />} />
          <Route path="/showmore/:petsId" element={<ShowPet />} />
          {!user ? (
            <Route path="/" element={<LogOut />} />
          ) : (
            <>
              <Route path="/login" element={<HomeLogin />} />
              <Route path="/mypets" element={<MyPets />} />
              <Route path="settings" element={<Settings />} />
            </>
          )}
          {user?.role === "admin" && (
            <>
              <Route path="/userdetails" element={<UserDetails />} />
              <Route path="/updatepet/:petsId" element={<UpdatePet />} />
              <Route path="pets" element={<Pets />} />
              <Route path="/users" element={<Users />} />
              <Route path="/addpet" element={<AddPet />} />
            </>
          )}
        </Routes>
      </>
    );
}

export default AppRoutes;
