import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import FirstApp from "./FirstApp";
import "./index.css";

const divRoot = document.querySelector("#root");

const App = () => {
  return (
    <>
      <FirstApp personName="Juan Pablo" />
      <CounterApp value={10} />
    </>
  );
};

ReactDOM.render(<App />, divRoot);
