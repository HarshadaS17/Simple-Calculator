// src/Calculator.js
import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Evaluate the input string
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((symbol) => (
          <button
            key={symbol}
            onClick={() => (symbol === "=" ? calculateResult() : handleClick(symbol))}
          >
            {symbol}
          </button>
        ))}
        <button onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
