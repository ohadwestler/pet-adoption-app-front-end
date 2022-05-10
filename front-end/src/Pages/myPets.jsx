import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import MyPetsCards from "../Components/MyPetsCard";
import axios from "axios";

function MyPetsPage({ auth, dataOfUser, setClickedPet }) {
    const [ownerPets, setOwnerPets] = useState([]);
    const [fosteredPets, setFosteredPets] = useState([]);
    
    const [render, setRender] = useState([])
    const [savedPets, setSavedPets] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/pet/user`).then((res) => {
      setSavedPets([...res.data.resultOfSaved]);

      setOwnerPets([...res.data.resultOfAdopted]);
      setFosteredPets([...res.data.resultOfFostered]);
    })
    .catch(err=>alert(err.response.data.message))
  }, [render]);
  
 
  return (
    <div className='containerOfMyPets '>
      <>
      {savedPets.length ? (
        <>
          {<h1 className="text-center mt-4">Saved pets</h1>}
          <div className="cards">
            {savedPets.map((pet, index) => (
              <MyPetsCards
              saved={savedPets.find((val)=> val.petsId == pet.petsId) != null}
              pet={pet}
                index={index}
                auth={auth}
                key={index}
                dataOfUser={dataOfUser}
                setRender ={setRender}
                setClickedPet = {setClickedPet}

              />
            ))}
          </div>
        </>
      ) : (
        ""
      )}
      {!(ownerPets.length || fosteredPets.length) ? (
        <Alert className="m-5" variant="success">
          <Alert.Heading>
            You currently do not own or foster any pets!
          </Alert.Heading>
        </Alert>
      ) : (
        <>
          {ownerPets.length ? (
            <>
              {<h1 className="text-center ">Adopted</h1>}:
              <div className="cards">
                {ownerPets.map((pet, index) => (
                  <MyPetsCards
                    pet={pet}
                    index={index}
                    key={index}
                    dataOfUser={dataOfUser}
                    auth={auth}
                    setRender ={setRender}
                    setClickedPet = {setClickedPet}

                    saved={savedPets.find((val)=> val.petsId == pet.petsId) != null}
                  />
                ))}
              </div>
            </>
          ) : (
            ""
          )}
          {fosteredPets.length ? (
            <>
              {<h1 className="text-center ">Fostered</h1>}:
              <div className="cards">
                {fosteredPets.map((pet, index) => (
                  <MyPetsCards
                    saved={savedPets.find((val)=> val.petsId == pet.petsId) != null}
                    pet={pet}
                    index={index}
                    key={index}
                    auth={auth}
                    dataOfUser={dataOfUser}
                    setClickedPet = {setClickedPet}
                    setRender ={setRender}
                  />
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </>
  </div>
  )
}

export default MyPetsPage;