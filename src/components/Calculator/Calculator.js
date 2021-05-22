import React, { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import Button from "../Button/Button";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [store, setStore] = useState("0");
  const [value, setValue] = useState("0");
  const [operation, setOperation] = useState("");

  useEffect(() => {
    console.log(`${store} ${operation} ${value} = ${display}`);
  }, [display, store, value, operation]);

  const clearStates = () => {
    setDisplay("0");
    setValue("0");
    setStore("0");
    setOperation("");
  };

  const handleEnter = (enter) => {
    const newValue = (value + enter).replace(/^0+/, "");
    setValue(newValue);
    setDisplay(newValue);
  };

  const handleOperation = (operation) => {
    setOperation(operation);

    if (+store) {
      setStore(store);
    } else {
      setStore(value);
      setValue("0");
    }
  };

  const handleEqual = () => {
    const equal = eval(store + operation + value).toString();
    setDisplay(equal);
    setStore(equal);
  };

  return (
    <div className={styles.root}>
      <div className={styles.display}>{display}</div>
      <div className={styles.numpad}>
        <Button
          color="secondary"
          onClick={() => {
            clearStates();
          }}
        >
          AC
        </Button>
        <Button color="secondary" onClick={() => handleOperation("+")}>
          +/-
        </Button>
        <Button color="secondary" onClick={() => handleOperation("%")}>
          %
        </Button>
        <Button color="primary" onClick={() => handleOperation("/")}>
          /
        </Button>
        <Button onClick={() => handleEnter("6")}>6</Button>
        <Button onClick={() => handleEnter("8")}>8</Button>
        <Button onClick={() => handleEnter("9")}>9</Button>
        <Button color="primary" onClick={() => handleOperation("*")}>
          *
        </Button>
        <Button onClick={() => handleEnter("4")}>4</Button>
        <Button onClick={() => handleEnter("5")}>5</Button>
        <Button onClick={() => handleEnter("6")}>6</Button>
        <Button color="primary" onClick={() => handleOperation("-")}>
          -
        </Button>
        <Button onClick={() => handleEnter("1")}>1</Button>
        <Button onClick={() => handleEnter("2")}>2</Button>
        <Button onClick={() => handleEnter("3")}>3</Button>
        <Button color="primary" onClick={() => handleOperation("+")}>
          +
        </Button>
        <Button
          size="double"
          onClick={() => handleEnter("0")}
          className={styles.double}
        >
          0
        </Button>
        <Button onClick={() => handleEnter(".")}>.</Button>
        <Button color="primary" onClick={() => handleEqual()}>
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
