import React, { useState } from "react";

const Forms = () => {
  const [input, setInput] = useState("");
  const [inputValueShow, inputValueHide] = useState(false);
  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
    inputValueHide(false);
  };
  return (
    <>
      <h1>Without form getting Data from input</h1>
      <p>My Name is :- {input}</p>
      <p>My Name is :-{inputValueShow ? input : ""}</p>
      <input type="text" name="" id="" onChange={handleChange} />
      <br />
      <button onClick={() => inputValueHide(true)}>Submit</button>
    </>
  );
};

export default Forms;
