import React from "react";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import NavBarGeneral from "./Components/NavBar";



export default function App() {
  return (
    <BrowserRouter>
      <NavBarGeneral/>
      <div className="bodyCard">
        <AppRoutes/>
      </div>
    </BrowserRouter>
  );
}
