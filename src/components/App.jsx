import Header from "./Header.jsx";
import UserInput from "./UserInput.jsx";
import Result from "./Result";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10,
    annualInvestment: 10,
    expectedReturn: 10,
    duration: 1,
  });

  const inputIsValid = inputValue.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setInputValue((previusValue) => {
      return {
        ...previusValue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} inputValue={inputValue} />
      {inputIsValid ? (
        <Result inputValue={inputValue} />
      ) : (
        <p className="center">Please Enter Duration Greater than Zero</p>
      )}
    </>
  );
}
