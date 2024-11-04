import {useState} from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';


function App()
{
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputType, newValue)
  {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputType]: +newValue
      };
    })
  }

  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInput = {userInput} onChangeInput = {handleChange}/>
      {!inputIsValid && (<p>Please enter a duration greater than zero!</p>)}
      {inputIsValid && <Results userInput = {userInput} />}
    </>
  )
}

export default App