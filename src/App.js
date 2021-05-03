import React, { useState } from "react";

const useInput = (initialValue, validator, validator2) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (typeof validator2 === "function") {
      willUpdate = validator2(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const not골뱅이 = (value) => !value.includes("@");
  const name = useInput("Lee", maxLen, not골뱅이);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
