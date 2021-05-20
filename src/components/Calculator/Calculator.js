import React, { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import Button from "../Button/Button";

const inititalStates = {
  result: "0",
  store: "0",
  value: "0",
  operation: "",
};

const Calculator = () => {
  const [result, setResult] = useState(inititalStates.result);
  const [store, setStore] = useState(inititalStates.store);
  const [value, setValue] = useState(inititalStates.value);
  const [operation, setOperation] = useState(inititalStates.operation);
  const [clearTitle, setClearTitle] = useState("AC");

  useEffect(() => {
    console.log(
      "Result:",
      result,
      "Store:",
      store,
      "Value:",
      value,
      "Operation:",
      operation
    );
  }, [result, store, , operation]);

  const clearStates = () => {
    if (+value) {
      setValue(inititalStates.value);
      setResult(inititalStates.result);
    } else {
      setValue(store);
      setResult(store);
      setStore(inititalStates.store);
    }
    setClearTitle("AC");
  };

  const handleNumButton = (num) => {
    const newValue = String(
      +result === 0 ? (+num === 0 ? 0 : num) : result + num
    );

    setResult(+store ? "0" : newValue);
    setValue(+store ? "0" : newValue);
    setClearTitle("C");
  };

  const handleOperationButton = (operation) => {
    setOperation(operation);
    if (+value) setStore(value);
    setValue(inititalStates.value);
    setResult(inititalStates.result);
  };

  return (
    <div className={styles.root}>
      <div className={styles.result}>{result}</div>
      <div className={styles.numpad}>
        <Button
          color="secondary"
          onClick={() => {
            clearStates();
          }}
        >
          {clearTitle}
        </Button>
        <Button color="secondary" onClick={() => handleOperationButton("+")}>
          +/-
        </Button>
        <Button color="secondary" onClick={() => handleOperationButton("%")}>
          %
        </Button>
        <Button color="primary" onClick={() => handleOperationButton("/")}>
          /
        </Button>
        <Button onClick={() => handleNumButton(6)}>6</Button>
        <Button onClick={() => handleNumButton(8)}>8</Button>
        <Button onClick={() => handleNumButton(9)}>9</Button>
        <Button color="primary" onClick={() => handleOperationButton("*")}>
          *
        </Button>
        <Button onClick={() => handleNumButton(4)}>4</Button>
        <Button onClick={() => handleNumButton(5)}>5</Button>
        <Button onClick={() => handleNumButton(6)}>6</Button>
        <Button color="primary" onClick={() => handleOperationButton("-")}>
          -
        </Button>
        <Button onClick={() => handleNumButton(1)}>1</Button>
        <Button onClick={() => handleNumButton(2)}>2</Button>
        <Button onClick={() => handleNumButton(3)}>3</Button>
        <Button color="primary" onClick={() => handleOperationButton("+")}>
          +
        </Button>
        <Button
          size="double"
          onClick={() => handleNumButton(0)}
          className={styles.double}
        >
          0
        </Button>
        <Button onClick={() => handleNumButton(",")}>,</Button>
        <Button color="primary" onClick={() => handleOperationButton("=")}>
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
