import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getSavedPets } from "../Redux/pets/actions/useActions";
import PetSection from "../Components/PetSection";

function MyPetsPage() {
  const { savedPets, fosteredPets, adoptedPets } = useSelector(
    (state) => state.pets
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavedPets());
  }, [dispatch]);

  return (
    <div className="containerOfMyPets">
      {savedPets.length > 0 && (
        <PetSection title="Saved pets" pets={savedPets} />
      )}
      {adoptedPets.length === 0 && fosteredPets.length === 0 ? (
        <Alert className="m-5" variant="success">
          <Alert.Heading>
            You currently do not own or foster any pets!
          </Alert.Heading>
        </Alert>
      ) : (
        <>
          {adoptedPets.length > 0 && (
            <PetSection title="Adopted" pets={adoptedPets} />
          )}
          {fosteredPets.length > 0 && (
            <PetSection title="Fostered" pets={fosteredPets} />
          )}
        </>
      )}
    </div>
  );
}

export default MyPetsPage;
