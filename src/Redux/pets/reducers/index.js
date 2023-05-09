const initialState = {
  pets: [],
  clickedPet: null,
  savedPets: [],
  adoptedPets: [],
  fosteredPets: [],
  clickedUserPets: [],
  allPets: [],
  loadingPets: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return { ...state, pets: action.payload };
    case "SET_CLICKED_PET":
      return { ...state, clickedPet: action.payload };
    case "ADOPT_PET":
      return {
        ...state,
        clickedPet: {
          ...state.clickedPet,
          adoptionStatus: "Adopted",
          userOwner: true,
          loadingPets: false,
        },
      };
    case "RETURN_PET":
      return {
        ...state,
        clickedPet: {
          ...state.clickedPet,
          adoptionStatus: "Available",
          userOwner: false,
          loadingPets: false,
        },
      };
    case "UNSAVE_PET":
      return {
        ...state,
        loadingPets: false,
        savedPets: state.savedPets.filter(
          (pet) => +pet.petsId !== action.payload
        ),
      };
    case "FOSTER_PET":
      return {
        ...state,
        clickedPet: {
          ...state.clickedPet,
          adoptionStatus: "Fostered",
          userOwner: true,
          loadingPets: false,
        },
      };
    case "SAVE_PET":
      return {
        ...state,
        loadingPets: false,
        savedPets: [
          ...state.savedPets,
          state.pets.find((pet) => pet.petsId === action.payload),
        ],
      };
    case "MY_PETS":
      const { savedPets, fosteredPets, adoptedPets } = action.payload;
      return {
        ...state,
        loadingPets: false,
        savedPets: [...savedPets],
        fosteredPets: [...fosteredPets],
        adoptedPets: [...adoptedPets],
      };
    case "SET_USER_PETS":
      return { ...state, loadingPets: false,clickedUserPets: action.payload };
    case "SET_ALL_PETS":
      return { ...state, allPets: action.payload, loadingPets: false,
      };
    case "SET_LOADING_PETS":
      return { ...state, loadingPets: action.payload };
    default:
      return state;
  }
};

export default reducer;
