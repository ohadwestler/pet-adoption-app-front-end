import React from "react";
import { Button } from "react-bootstrap";
import PetCard from "./PetDetailsCard";

export default function PetResults({ pets, showMore }) {
  return (
    <div className="cards">
      {pets.map((pet, index) => (
        <div key={index} className="mb-3">
          <PetCard
            pet={pet}
            key={index}
            index={index}
            smallCard={true}
            otherButtons={
              <div className="buttons mt-2">
                <Button onClick={() => showMore(pet)}>Show More</Button>
              </div>
            }
          />
        </div>
      ))}
    </div>
  );
}
