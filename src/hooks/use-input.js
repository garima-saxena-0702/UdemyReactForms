import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [touchedEnteredValue, setTouchedEnteredValue] = useState(false);

  const validEnteredValue = validateValue(enteredValue);
  const hasError = !validEnteredValue && touchedEnteredValue;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setTouchedEnteredValue(true);
  };

  const reset = () => {
      setEnteredValue('');
      setTouchedEnteredValue(false);
  }

  return {
    value: enteredValue,
    isValid: validEnteredValue,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset
  };
};

export default useInput;
