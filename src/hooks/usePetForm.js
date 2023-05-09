import { useState } from "react";

export const usePetForm = (initialPetData, handleSubmit) => {
  const [validated, setValidated] = useState(false);
  const [petData, setPetData] = useState(initialPetData);
  const [error, setError] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.currentTarget;
      setSpinner("grow");
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true);
      await handleSubmit(petData);
      setError(null);
      setPetData(initialPetData);
    } catch (err) {
      console.log(err);
      setError(err.message || "An error occurred during pet upload.");
    } finally {
      setSpinner(false);
    }
  };

  return {
    petData,
    setPetData,
    validated,
    error,
    spinner,
    handleFormSubmit,
  };
};
