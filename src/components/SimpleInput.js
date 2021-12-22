import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: validEnteredName,
    hasError: nameInputHasError,
    valueInputChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [touchedEnteredEmail, setTouchedEnteredEmail] = useState(false);

  const nonemptyEnteredEmail = enteredEmail.trim() !== "";
  const validEnteredEmail = enteredEmail.includes("@");
  const emailInputInvalid =
    !validEnteredEmail && !nonemptyEnteredEmail && touchedEnteredEmail;
  let validForm = false;

  if (validEnteredName && validEnteredEmail && nonemptyEnteredEmail) {
    validForm = true;
  } else {
    validForm = false;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setTouchedEnteredEmail(true);
  };

  const formSubmitionHandler = (event) => {
    event.preventDefault();
    setTouchedEnteredEmail(true);
    if (!validEnteredName || !validEnteredEmail || !nonemptyEnteredEmail) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    setEnteredEmail("");
    setTouchedEnteredEmail(false);
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputInvalid && !nonemptyEnteredEmail && (
          <p className="error-text">Email must not be empty</p>
        )}
        {emailInputInvalid && !validEnteredEmail && nonemptyEnteredEmail && (
          <p className="error-text">Email must contain @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!validForm}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
