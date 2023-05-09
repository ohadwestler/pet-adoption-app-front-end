export const setLoading = (loading) => ({
    type: "SET_LOADING_PETS",
    payload: loading,
  });
  
  export const setSearchResults = (pets) => ({
    type: "SET_SEARCH_RESULTS",
    payload: pets,
  });
  
  export const setClickedPet = (pet) => ({
    type: "SET_CLICKED_PET",
    payload: pet,
  });
  
  export const setMyPets = (pets) => ({
    type: "MY_PETS",
    payload: pets,
  })

  export const setUserPets = (pets) => ({
    type: "SET_USER_PETS",
    payload: pets,
  });

  export const setAllPets = (pets) => ({
    type: "SET_ALL_PETS",
    payload: pets,
  });

  export const updateRender = (operation, petId) => {
    switch (operation) {
      case "adopt":
        return { type: "ADOPT_PET", payload: petId };
      case "return":
        return { type: "RETURN_PET", payload: petId };
      case "unsave":
        return { type: "UNSAVE_PET", payload: petId };
      case "foster":
        return { type: "FOSTER_PET", payload: petId };
      case "save":
        return { type: "SAVE_PET", payload: petId };
      default: return { type: "DEFAULT" };
    }
  };
  