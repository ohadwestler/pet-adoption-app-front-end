import React from "react";
import PetCard from "./PetDetailsCard";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PetSection({ title, pets }) {
  const navigate = useNavigate();

  const showMore = (pet) => {
    navigate(`/showmore/${pet.petsId}`);
  };

  return (
    <>
      <h1 className="text-center">{title}</h1>
      <div className="cards">
        {pets.map((pet, index) => (
          <PetCard
            pet={pet}
            index={index}
            smallCard={true}
            key={index}
            otherButtons={
              <div className="d-flex justify-content-lg-evenly">
                <Button onClick={() => showMore(pet)}>Show More</Button>
              </div>
            }
          />
        ))}
      </div>
    </>
  );
}
