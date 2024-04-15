import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import { checkSyntax } from "./checkSyntax";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    if (input.trim() === "") {
      setOutput(
        <div className="result">
          <p style={{ color: "#dc3545" }}>Lütfen bir ifade girin.</p>
        </div>
      );
      return;
    }

    if (checkSyntax(input)) {
      const result = evaluate(input);
      setOutput(
        <div className="result">
          <p style={{ color: "#28a745" }}>
            Girilen ifade matematiksel bir ifadedir.
          </p>
          <p>Sonuç: {result}</p>
        </div>
      );
    } else {
      setOutput(
        <div className="result">
          <p style={{ color: "#dc3545" }}>
            Girilen ifade matematiksel bir ifade değildir.
          </p>
        </div>
      );
    }
  };
  const handleReset = () => {
    setInput("");
    setOutput("");
  };
  return (
    <div className="card">
      <h1>Matematiksel İfade Kontrolü</h1>
      <div className="card-content">
        <input type="text" value={input} onChange={handleInputChange} />
        <div>
          <button onClick={handleCalculate}>Kontrol Et</button>
          <button onClick={handleReset}>Sıfırla</button>
        </div>
      </div>
      <p>{output}</p>
    </div>
  );
};

export default Calculator;
