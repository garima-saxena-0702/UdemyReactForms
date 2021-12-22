import {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [touchedEnteredName, setTouchedEnteredName] = useState(false);
  const [touchedEnteredEmail, setTouchedEnteredEmail] = useState(false);

  const validEnteredName = enteredName.trim() !== '';
  const nameInputInvalid = !validEnteredName && touchedEnteredName;
  const nonemptyEnteredEmail = enteredEmail.trim() !== '';
  const validEnteredEmail = enteredEmail.includes('@');
  const emailInputInvalid = !validEnteredEmail && !nonemptyEnteredEmail && touchedEnteredEmail;
  let validForm = false;

  if(validEnteredName && validEnteredEmail && nonemptyEnteredEmail) {
    validForm = true;
  } else {
    validForm = false;
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setTouchedEnteredName(true);
  }

  const emailInputBlurHandler = event => {
    setTouchedEnteredEmail(true);
  }

  const formSubmitionHandler = event => {
    event.preventDefault();
    setTouchedEnteredName(true);
    setTouchedEnteredEmail(true);
    if(!validEnteredName || !validEnteredEmail ||!nonemptyEnteredEmail) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName('');
    setTouchedEnteredName(false);
    setEnteredEmail('');
    setTouchedEnteredEmail(false);
  }

  const nameInputClasses = !nameInputInvalid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputInvalid && (
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
