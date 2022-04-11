import React, { Component, useEffect, useState } from "react";
import LogOut from "./Pages/LogOut";
import HomeLogin from "./Pages/LoginHome";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Settings from "./Pages/Settings";
import NavBarGeneral from "./Components/NavBar";
import Pets from "./Pages/Pets";



export default function App() {
  const [auth, setAuth] = useState(false)
 
  const [dataOfUser, setDataOfUser] = useState("")
  if(auth===false && window.location.pathname!=="/"){
    window.location.pathname="/"
  }
  

  return (
     
       <BrowserRouter>
       {auth?
       <NavBarGeneral dataOfUser = {dataOfUser} setDataOfUser = {setDataOfUser} setAuth = {setAuth} />:""}
       <Routes>
         
       {!auth?
        <Route path="/" element={<>
          <LogOut  setDataOfUser = {setDataOfUser} auth ={auth} setAuth ={setAuth}/>
        </>} />:<>
        <Route path="/login" element={<>
         <HomeLogin dataOfUser ={dataOfUser} setDataOfUser ={setDataOfUser} />
        </>} />
        <Route path="pets" element={<>
         <Pets />
        </>} />
        <Route path="settings" element={<>
        <Settings dataOfUser = {dataOfUser} />
        </>} />
        </>}
      </Routes>  
</BrowserRouter>
    
  );
}
