import {useState, useRef} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [validEnteredName, setValidEnteredName] = useState(true);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const formSubmitionHandler = event => {
    event.preventDefault();
    if(enteredName.trim() == '' ) {
      setValidEnteredName(false);
      return;
    }
    setValidEnteredName(true);
    console.log(enteredName)
  }

  const nameInputClasses = validEnteredName ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
        {!validEnteredName && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
