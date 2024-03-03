import { useState } from "react";

export default function UserInput() {
  const [inputValue, setInputValue] = useState("Enter Value");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={inputValue}
            onChange={() => handleChange(event)}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={inputValue}
            onChange={() => handleChange(event)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            value={inputValue}
            onChange={() => handleChange(event)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={inputValue}
            onChange={() => handleChange(event)}
          />
        </p>
      </div>
    </section>
  );
}
