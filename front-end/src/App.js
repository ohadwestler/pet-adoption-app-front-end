import React, { useEffect, useState } from "react";
import LogOut from "./Pages/LogOutHome";
import HomeLogin from "./Pages/LoginHome";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Settings from "./Pages/UpdateUser";
import NavBarGeneral from "./Components/NavBar";
import Pets from "./Pages/AllPets";
import GetUsers from "./Pages/Users";
import AddPet from "./Pages/AddPet";
import Search from "./Pages/Search";
import UpdatePet from "./Pages/UpadatePet";
import ShowPet from "./Pages/ShowPet";
import MyPets from "./Pages/MyPets";
import UserDeatails from "./Pages/UserDeatails";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [dataOfUser, setDataOfUser] = useState("");
  const [role, setRole] = useState("");
  const [clickedPet, setClickedPet] = useState("");
  const [userClicked, setUserClicked] = useState("");

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
                <Search setClickedPet={setClickedPet} />
              </>
            }
          />

          <Route
            path="/showmore"
            element={
              <>
                <ShowPet
                  clickedPet={clickedPet}
                  auth={auth}
                  dataOfUser={dataOfUser}
                />
              </>
            }
          />
          {!auth ? (
            <>
              <Route
                path="/"
                element={
                  <>
                    <LogOut setDataOfUser={setDataOfUser} setAuth={setAuth} />
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
                    <HomeLogin dataOfUser={dataOfUser} />
                  </>
                }
              />
              <Route
                path="/mypets"
                element={
                  <>
                    <MyPets
                      auth={auth}
                      dataOfUser={dataOfUser}
                      setClickedPet={setClickedPet}
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
                    <UserDeatails userClicked={userClicked} />
                  </>
                }
              />
              <Route
                path="/updatepet"
                element={<UpdatePet clickedPet={clickedPet} />}
              />
              <Route
                path="pets"
                element={
                  <>
                    <Pets setClickedPet={setClickedPet} />
                  </>
                }
              />
              <Route
                path="/users"
                element={
                  <>
                    <GetUsers setUserClicked={setUserClicked} />
                  </>
                }
              />
              <Route
                path="/addpet"
                element={
                  <>
                    <AddPet />
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
