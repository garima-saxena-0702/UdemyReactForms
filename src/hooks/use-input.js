import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  touchedEnteredValue: false,
};

const inputStateReducer = (state, action) => {
    if(action.type == 'Input') {
        return {
            value: action.value,
            touchedEnteredValue: state.touchedEnteredValue
        }
    }
    if(action.type == 'Blur') {
        return {touchedEnteredValue: true, value: state.value}
    }
    if(action.type == 'Reset') {
        return {touchedEnteredValue: false, value: ''}
    }

    return initialInputState;
}

const useInput = (validateValue) => {
  const [inputState, dispath ] = useReducer(inputStateReducer, initialInputState);
  const [enteredValue, setEnteredValue] = useState("");
  const [touchedEnteredValue, setTouchedEnteredValue] = useState(false);

  const validEnteredValue = validateValue(inputState.value);
  const hasError = !validEnteredValue && inputState.touchedEnteredValue;

  const valueInputChangeHandler = (event) => {
    dispath({type: 'Input', value: event.target.value});    
  };

  const valueInputBlurHandler = (event) => {
      dispath({ type: "Blur"});
  };

  const reset = () => {
      dispath({ type: "Reset",});
  }

  return {
    value: inputState.value,
    isValid: validEnteredValue,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset
  };
};

export default useInput;
