import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const changeCount1 = () => {
    setCount1(count1 + 1);
  };
  const changeCount2 = () => {
    setCount2(count2 + 1);
  };
  useEffect(() => {
    console.log("Componets Re rendering  count1");
  }, [count1]);
  useEffect(() => {
    console.log("Componets Re rendering  count2");
  }, [count2]);
  return (
    <>
      <h1>Value of Count1 is {count1}</h1>
      <h1>Value of Count2 is {count2}</h1>
      <button onClick={changeCount1}>Inc Count1</button>
      <button onClick={changeCount2}>Inc Count2</button>
    </>
  );
};

export default Effect;
