import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserPets } from "../Redux/pets/actions/useActions";
import PetCard from "../Components/PetDetailsCard";
import UserTable from "../Components/UserTable";

export default function UserDetails() {
  const { userClicked } = useSelector((state) => state.auth);
  const { clickedUserPets: userPets } = useSelector((state) => state.pets);
  const { email, firstname } = userClicked || "";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPets(email));
  }, [email, dispatch]);

  return (
    <div className="m-3 overflow-auto">
      <UserTable users={[userClicked]} />
      {!userPets.length ? (
        <Alert className="m-5" variant="success">
          <Alert.Heading>
            The user currently does not own any pets!
          </Alert.Heading>
        </Alert>
      ) : (
        <>
          <h1>{firstname} owns:</h1>
          <div className="cards">
            {userPets.map((pet, index) => (
              <PetCard key={index} pet={pet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
