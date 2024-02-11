import React, { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(5);
  const [message, setmessage] = useState("");
  const decrementFunc = () => {
    if (counter > 0) {
      console.log("--");
      setCounter(counter - 1);
      setmessage("")
    } else {
      console.log("Not allowed");
      setmessage("*Value not less than 0")
    }
  };
  const incrementFunc = () => {
    if (counter < 100) {
      console.log("++");
      setCounter(counter + 1);
      setmessage("")
    } else {
      console.log("Not allowed");
      setmessage("*Value not greater than 100")
    }
  };
  return (
    <>
      <div className="counter-container">
        <div className="counter-inner">
          <h1>Counter Using Hooks</h1>
          <main>
            <button onClick={decrementFunc}>-</button>
            <p>{counter}</p>
            <button onClick={incrementFunc}>+</button>
          </main>
        </div>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Counter;
