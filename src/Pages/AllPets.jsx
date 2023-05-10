import React, { useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PetCard from "../Components/PetDetailsCard";
import { getAllPets } from "../Redux/pets/actions/useActions";
import { useDispatch, useSelector } from "react-redux";

function PetList({ pets }) {
  const navigate = useNavigate();

  const updatePet = (pet) => {
    navigate(`/updatepet/${pet.petsId}`);
  }

  const showMore = (pet) => {
    navigate(`/showmore/${pet.petsId}`);
  }

  return (
    <div className="cards">
      {pets.map((pet, index) => (
        <div key={index} className="my-4">
          <PetCard
            pet={pet}
            key={index}
            index={index}
            smallCard={true}
            otherButtons={
              <div className="d-flex justify-content-around">
                <Button onClick={() => updatePet(pet)}>Edit</Button>
                <Button onClick={() => showMore(pet)}>Show More</Button>
              </div>
            }
          />
        </div>
      ))}
    </div>
  );
}

export default function Pets() {
  const { allPets: pets } = useSelector((state) => state.pets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPets());
  }, []);

  return (
    <div className="">
      {pets ? (
        <PetList pets={pets} />
      ) : (
        <Alert className="m-5" variant="success">
          <Alert.Heading>
            There are currently no pets in the database!
          </Alert.Heading>
        </Alert>
      )}
    </div>
  );
}
