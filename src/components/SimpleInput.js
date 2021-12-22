import {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [touchedEnteredName, setTouchedEnteredName] = useState(false);

  const validEnteredName = enteredName.trim() !== '';
  const nameInputInvalid = !validEnteredName && touchedEnteredName;

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setTouchedEnteredName(true);
  }

  const formSubmitionHandler = event => {
    event.preventDefault();
    setTouchedEnteredName(true);
    if(!validEnteredName) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setTouchedEnteredName(false);
  }

  const nameInputClasses = !nameInputInvalid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
