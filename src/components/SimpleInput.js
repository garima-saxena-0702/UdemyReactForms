import {useState, useRef} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const formSubmitionHandler = event => {
    event.preventDefault();
    if(enteredName.trim() == '' ) {
      return;
    }
    console.log(enteredName)
  }

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
