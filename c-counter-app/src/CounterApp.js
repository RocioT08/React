import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const counterAddHandler = () => {
    console.log("new counterAddHandler");
    setCounter(counter + 1);
  };

  const counterResetHandler = () => {
    console.log("new counterResetHandler");
    setCounter(value);
  };

  const counterReduceHandler = () => {
    console.log("new counterReduceHandler");
    //si no hubiera acceso al value al que se le quiere sumar/restar
    setCounter((c) => c - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={counterAddHandler}>+1</button>
      <button onClick={counterResetHandler}>Reset</button>
      <button onClick={counterReduceHandler}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 10,
};

export default CounterApp;
