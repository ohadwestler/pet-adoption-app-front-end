import axios from "axios";
import {
  setLoading,
  setSearchResults,
  setClickedPet,
  setMyPets,
  setAllPets,
  setUserPets,
  updateRender,
} from "./type";
import API_ENDPOINT from "../../api";

export const searchPets = ({ type, name, weight, height, status }) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.get(API_ENDPOINT + "/searchpet", {
        params: { type, name, weight, height, status },
      });
      const pets = res.data;
      dispatch(setSearchResults(pets));
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const fetchClickedPet = (petsId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(API_ENDPOINT + `/pet/${petsId}`);
      const pet = res.data[0];
      dispatch(setClickedPet(pet));
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const processPet = (petId, operation) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await axios.post(
        API_ENDPOINT + `/pet/${petId}/${operation}`
      );
      dispatch(updateRender(operation, petId));
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const processPetDelete = (petId, operation) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await axios.delete(
        API_ENDPOINT + `/pet/${petId}/${operation}`
      );
      dispatch(updateRender("unsave", petId));
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getSavedPets = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(API_ENDPOINT + `/pet/user`);
      const { resultOfSaved, resultOfAdopted, resultOfFostered } =
        response.data;
      dispatch(
        setMyPets({
          savedPets: [...resultOfSaved],
          adoptedPets: [...resultOfAdopted],
          fosteredPets: [...resultOfFostered],
        })
      );
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getUserPets = (email) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        API_ENDPOINT + `/pet/user/${email}/full`
      );
      dispatch(setUserPets(res.data.resultOfUserPets));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getAllPets = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(API_ENDPOINT + `/pets`);
      dispatch(setAllPets([...res.data]));
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const postPet = (pet) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await axios.post(API_ENDPOINT + `/pets`, pet);
    } catch (err) {
      if (err.response.data[0]) {
        alert(
          `${err.response.data[0].instancePath.replace(API_ENDPOINT + "/", "")} ${
            err.response.data[0].message
          }`
        );
      } else {
        alert(err.response.data.message);
      }
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };
};


export const updatePet = (pet, id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios.put(API_ENDPOINT + `/updatePet/${id}`, pet);
    } catch (err) {
      if (err.response.data[0]) {
        alert(
          `${err.response.data[0].instancePath.replace(API_ENDPOINT + "/", "")} ${
            err.response.data[0].message
          }`
        );
      } else {
        alert(err.response.data.message);
      }
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const deletePet = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      axios.delete(API_ENDPOINT + `/deletepet/${id}`);
      alert("Deleted from system");
    } catch (err) {
      alert("There is a problem with the server, please try again later.");
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };
};
