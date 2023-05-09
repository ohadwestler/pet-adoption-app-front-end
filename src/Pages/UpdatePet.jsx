import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PetForm from "../Components/PetForm";
import { fetchClickedPet } from "../Redux/pets/actions/useActions";
import { useSelector, useDispatch } from "react-redux";
import { updatePet } from "../Redux/pets/actions/useActions";
import { usePetForm } from "../hooks/usePetForm";

export default function UpdatePet() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { petsId } = useParams();
  const { clickedPet } = useSelector((state) => state.pets);
  
  useEffect(() => {
    dispatch(fetchClickedPet(petsId));
  }, [dispatch, petsId]);

  const handleSubmit = async (petData) => {
    const formData = new FormData();
    Object.entries(petData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await dispatch(updatePet(formData, petsId));
    alert("Upload is done!");
    navigate("/pets");
  };

  const { petData, setPetData, validated, error, spinner, handleFormSubmit } =
    usePetForm(null, handleSubmit);

  useEffect(() => {
    if (clickedPet) {
      const { uploadResult, adoptionStatus, breed, hypo, dietary, biography } =
        clickedPet;
      setPetData({
        ...clickedPet,
        bio: biography,
        image: uploadResult,
        status: adoptionStatus,
        bread: breed,
        elergy: hypo,
        diet: dietary,
      });
    }
  }, [clickedPet, setPetData]);

  if (!petData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PetForm
        petData={petData}
        setPetData={setPetData}
        handleSubmit={handleFormSubmit}
        validated={validated}
        spinner={spinner}
        error={error}
        pageType="update"
      />
    </div>
  );
}
