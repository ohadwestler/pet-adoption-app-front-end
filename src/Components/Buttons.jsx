import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  processPet,
  processPetDelete,
  getSavedPets,
} from "../Redux/pets/actions/useActions";
import { Button } from "react-bootstrap";

export default function Buttons({ pet, dataOfUser }) {
  const { savedPets } = useSelector((state) => state.pets);
  const dispatch = useDispatch();
  const petActions = {
    adopt: () => dispatch(processPet(pet.petsId, "adopt")),
    return: () => dispatch(processPet(pet.petsId, "return")),
    unsave: () => dispatch(processPetDelete(pet.petsId, "save")),
    foster: () => dispatch(processPet(pet.petsId, "foster")),
    save: () => dispatch(processPet(pet.petsId, "save")),
    getSaved: () => dispatch(getSavedPets()),
  };

  useEffect(() => {
    petActions.getSaved();
  }, []);

  return (
    <div className="buttonsOfShowPet">
      <>
        {savedPets.find((val) => val?.petsId == pet?.petsId) != null ? (
          <div className="d-flex justify-content-around">
            <Button
              className="btn btn-danger"
              onClick={() => petActions.unsave(pet)}
            >
              unsave it
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-around">
            <Button
              className="btn btn-success"
              onClick={() => petActions.save(pet)}
            >
              Save it
            </Button>
          </div>
        )}

        {pet.adoptionStatus === "Available" ? (
          <>
            <div className="buttonsOfShowPet d-flex justify-content-around">
              <Button
                className="btn btn-success"
                onClick={() => petActions.foster(pet)}
              >
                Foster it
              </Button>
              <Button
                className="btn btn-success"
                onClick={() => petActions.adopt(pet)}
              >
                Adopt it
              </Button>
            </div>
          </>
        ) : (
          ""
        )}

        {pet.adoptionStatus === "Adopted" &&
        (dataOfUser.email === pet.owner || pet.userOwner) ? (
          <>
            <div className="buttonsOfShowPet d-flex justify-content-around">
              <Button
                className="btn btn-danger"
                onClick={() => petActions.return(pet)}
              >
                Cancell Adoption
              </Button>
            </div>
          </>
        ) : (
          ""
        )}

        {pet.adoptionStatus === "Fostered" &&
        (dataOfUser.email === pet.owner || pet.userOwner) ? (
          <>
            <div className="buttonsOfShowPet d-flex justify-content-around">
              <Button
                className="btn btn-danger"
                onClick={() => petActions.return(pet)}
              >
                Cancell foster
              </Button>
              <Button
                className="btn btn-success"
                onClick={() => petActions.adopt(pet)}
              >
                Adopt it
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
      </>
    </div>
  );
}
