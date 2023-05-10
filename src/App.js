import React from "react";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import NavBarGeneral from "./Components/NavBar";
import { useSelector } from "react-redux";
import Loading from "./Components/Loading";

export default function App() {
  const { loadingSpinner } = useSelector((state) => state.auth);
  const { loadingPets } = useSelector((state) => state.pets);
  return (
    <BrowserRouter>
      {loadingSpinner || loadingPets ? <Loading /> : ""}
      <NavBarGeneral />
      <div className="bodyCard">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
