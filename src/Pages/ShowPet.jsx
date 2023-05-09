import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchClickedPet } from "../Redux/pets/actions/useActions";
import PetCard from "../Components/PetDetailsCard";

export default function ShowPet() {
  const { petsId } = useParams();
  const dispatch = useDispatch();
  const { clickedPet } = useSelector((state) => state.pets);

  useEffect(() => {
    dispatch(fetchClickedPet(petsId));
  }, [petsId, dispatch]);

  if (!clickedPet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center m-4">
      <PetCard pet={clickedPet}/>
    </div>
  );
}
