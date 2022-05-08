import React, { Component, useEffect, useState } from "react";
import LogOut from "./Pages/LogOut";
import HomeLogin from "./Pages/LoginHome";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Settings from "./Pages/Settings";
import NavBarGeneral from "./Components/NavBar";
import Pets from "./Pages/Pets";
import Cookies from "universal-cookie";
import axios from "axios";
import GetUsers from "./Pages/users";
import AddPet from "./Pages/addPet";
import Search from "./Pages/Search";
import UpdatePet from "./Pages/upadatePet";
import ShowPet from "./Pages/ShowPet";
import MyPets from "./Pages/myPets";
import UserDeatails from "./Pages/UserDeatails";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [dataOfUser, setDataOfUser] = useState("");
  const [role, setRole] = useState("");
  const [editPet, setEditPet] = useState("");
  const [userClicked, setUserClicked] = useState("")


  useEffect(() => {
    setRole(dataOfUser.role);
    if (auth === false && window.location.pathname !== "/") {
      window.location.pathname = "/";
    }
  }, [auth]);

  return (
    <BrowserRouter>
      <NavBarGeneral
        dataOfUser={dataOfUser}
        setDataOfUser={setDataOfUser}
        setAuth={setAuth}
      />

        <div className="bodyCard">
      <Routes>
        <Route
          path="/search"
          element={
            <>
              <Search
                setEditPet={setEditPet}
                auth={auth}
                dataOfUser={dataOfUser}
              />
            </>
          }
        />

        <Route
          path="/showmore"
          element={
            <>
              <ShowPet editPet={editPet} />
            </>
          }
        />
        {!auth ? (
          <>
            <Route
              path="/"
              element={
                <>
                  <LogOut
                    setDataOfUser={setDataOfUser}
                    auth={auth}
                    setAuth={setAuth}
                  />
                </>
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={
                <>
                  <HomeLogin
                    dataOfUser={dataOfUser}
                    setDataOfUser={setDataOfUser}
                  />
                </>
              }
            />
            <Route
              path="/mypets"
              element={
                <>
                  <MyPets
                  auth = {auth}
                    dataOfUser={dataOfUser}
                    setDataOfUser={setDataOfUser}
                    setEditPet = {setEditPet}
        
                  />
                </>
              }
            />

            <Route
              path="settings"
              element={
                <>
                  <Settings
                    dataOfUser={dataOfUser}
                    setDataOfUser={setDataOfUser}
                  />
                </>
              }
            />
          </>
        )}
        {role === "admin" ? (
          <>
   
        <Route
          path="/userdetails"
          element={
            <>
              <UserDeatails
                setEditPet={setEditPet}
                auth={auth}
                userClicked = {userClicked}
                dataOfUser={dataOfUser}
              />
            </>
          }
        />
            <Route
              path="/updatepet"
              element={<UpdatePet dataOfUser={dataOfUser} editPet={editPet} />}
            />
            <Route
              path="pets"
              element={
                <>
                  <Pets loginEmail={dataOfUser.email} setEditPet={setEditPet} />
                </>
              }
            />
            <Route
              path="/users"
              element={
                <>
                  <GetUsers dataOfUser={dataOfUser} setUserClicked = {setUserClicked}/>
                </>
              }
            />
            <Route
              path="/addpet"
              element={
                <>
                  <AddPet dataOfUser={dataOfUser} />
                </>
              }
            />
          </>
        ) : (
          ""
        )}
      </Routes>
        </div>
    </BrowserRouter>
  );
}
