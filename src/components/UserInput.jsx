import { useState } from "react";

export default function UserInput() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: undefined,
  });

  function handleChange(inputIdentifier, newValue) {
    setInputValue((previusValue) => {
      return {
        ...previusValue,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={inputValue.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={inputValue.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            value={inputValue.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={inputValue.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
