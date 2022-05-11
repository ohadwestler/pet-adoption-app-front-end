import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function Buttons({ pet, dataOfUser, setRender }) {
  const [savedPets, setSavedPets] = useState([]);
  const [renderOfSaved, setRenderOfSaved] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pet/user`)
      .then((res) => {
        setSavedPets([...res.data.resultOfSaved]);
      })
      .catch((err) => alert(err.response.data.message));
  }, [renderOfSaved]);

  async function adoptIt(pet) {
    try {
      const response = await axios.post(
        `http://localhost:3001/pet/${pet.petsId}/adopt`
      );
      setRenderOfSaved(response);
      setRender(response);
    } catch (e) {
      alert(e.response.data.message);
    }
  }
  async function returnAgency(pet) {
    try {
      const response = await axios.post(
        `http://localhost:3001/pet/${pet.petsId}/return`
      );
      setRenderOfSaved(response);
      setRender(response);
    } catch (e) {
      console.log(e);
    }
  }

  async function unSaveIt(pet) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/pet/${pet.petsId}/save`
      );
      console.log(response);
      setRenderOfSaved(response);
      setRender(response);
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async function fosteredIt(pet) {
    try {
      const response = await axios.post(
        `http://localhost:3001/pet/${pet.petsId}/foster`
      );
      setRender(response);
      setRenderOfSaved(response);
      console.log(pet.adoptionStatus);
    } catch (e) {
      console.log(e);
    }
  }
  async function saveIt(pet) {
    try {
      const response = await axios.post(
        `http://localhost:3001/pet/${pet.petsId}/save`
      );
      setRenderOfSaved(response);
      setRender(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="buttonsOfShowPet">
      <>
        {savedPets.find((val) => val.petsId == pet.petsId) != null ? (
          <div className="d-flex justify-content-around">
            <Button className="btn btn-danger" onClick={() => unSaveIt(pet)}>
              unsave it
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-around">
            <Button className="btn btn-success" onClick={() => saveIt(pet)}>
              Save it
            </Button>
          </div>
        )}

        {pet.adoptionStatus === "Available" ? (
          <>
            <div className="buttonsOfShowPet d-flex justify-content-around">
              <Button
                className="btn btn-success"
                onClick={() => fosteredIt(pet)}
              >
                Foster it
              </Button>
              <Button className="btn btn-success" onClick={() => adoptIt(pet)}>
                Adopt it
              </Button>
            </div>
          </>
        ) : (
          ""
        )}

        {pet.adoptionStatus === "Adopted" && dataOfUser.email === pet.owner ? (
          <>
            <div className="buttonsOfShowPet d-flex justify-content-around">
              <Button
                className="btn btn-danger"
                onClick={() => returnAgency(pet)}
              >
                Cancell Adoption
              </Button>
            </div>
          </>
        ) : (
          ""
        )}

        {pet.adoptionStatus === "Fostered" && dataOfUser.email === pet.owner ? (
          <>
            <div className="buttonsOfShowPet d-flex justify-content-around">
              <Button
                className="btn btn-danger"
                onClick={() => returnAgency(pet)}
              >
                Cancell foster
              </Button>
              <Button className="btn btn-success" onClick={() => adoptIt(pet)}>
                Adopt it
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
      </>
      {pet.adoptionStatus === "Fostered" && dataOfUser.email !== pet.owner ? (
          <>
            <div className="buttonsOfShowPet d-flex justify-content-around">
              <Button className="btn btn-success" onClick={() => adoptIt(pet)}>
                Adopt it
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
    </div>
  );
}
