import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPets } from "../Redux/pets/actions/useActions";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import SearchForm from "../Components/SearchForm";
import PetResults from "../Components/SearchResult";

export default function Search() {
  const [adv, setAdv] = useState(false);
  const [petData, setPetData] = useState({
    type: "",
    name: "",
    weight: "",
    height: "",
    status: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const { type, name, weight, height, status } = petData;
  const { pets } = useSelector((state) => state.pets);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const showMore = (pet) => {
    navigate(`/showmore/${pet.petsId}`);
  };

  const handleSearch = () => {
    dispatch(searchPets({ type, name, weight, height, status }));
  };

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-5">
      {errorMessage && (
        <Alert
          variant="danger"
          onClose={() => setErrorMessage(null)}
          dismissible
        >
          {errorMessage}
        </Alert>
      )}
      <SearchForm
        adv={adv}
        petData={petData}
        handleChange={handleChange}
        handleSearch={handleSearch}
        setAdv={setAdv}
      />
      {pets?.length ? <PetResults pets={pets} showMore={showMore} /> : ""}
    </div>
  );
}
