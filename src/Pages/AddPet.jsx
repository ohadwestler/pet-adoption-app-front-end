import React from "react";
import { useNavigate } from "react-router-dom";
import PetForm from "../Components/PetForm";
import { postPet } from "../Redux/pets/actions/useActions";
import { usePetForm } from "../hooks/usePetForm";
import { useDispatch } from "react-redux";
const initialPetData = {
  name: "",
  type: "",
  color: "",
  diet: "",
  weight: "",
  height: "",
  status: "",
  breed: "",
  elergy: "",
  bio: "",
  image: null,
};

export default function AddPet() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (petData) => {
    const formData = new FormData();
    Object.entries(petData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await dispatch(postPet(formData));
    alert("Upload is done!");
    navigate("/pets");
  };

  const { petData, setPetData, validated, error, spinner, handleFormSubmit } =
    usePetForm(initialPetData, handleSubmit);

  return (
    <div>
      <PetForm
        petData={petData}
        setPetData={setPetData}
        handleSubmit={handleFormSubmit}
        validated={validated}
        spinner={spinner}
        error={error}
      />
    </div>
  );
}
