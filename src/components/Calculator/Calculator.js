import React, { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import Button from "../Button/Button";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [store, setStore] = useState("0");
  const [value, setValue] = useState("0");
  const [operation, setOperation] = useState();
  const [clearTitle, setClearTitle] = useState("AC");

  useEffect(() => {
    console.log(
      "Display:",
      display,
      "Store:",
      store,
      "Value:",
      value,
      "Operation:",
      operation
    );
  }, [display, store, , operation]);

  const math = (x, oper, y) => {
    return eval(myArray.join(" "));
  };

  const clearStates = () => {
    setDisplay("0");
    setValue("0");
    setStore("0");
  };

  const handleNumButton = (num) => {
    const enterValue = (value + num).replace(/^0+/, "");

    if (+enterValue) {
      setDisplay(enterValue);
      setValue(enterValue);
    }

    // const newValue = String(
    //   +value === 0 ? (+num === 0 ? 0 : num) : value + num
    // );
    // if (!+value) {
    //   setValue(newValue);
    //   setDisplay(newValue);
    // }
    // // setDisplay(newValue);
    // // setValue(newValue);
    // setClearTitle("C");
  };

  const handleOperationButton = (operation) => {
    setOperation(operation);
    if (+store && +value) {
      setStore(eval(store + operation + value));
      setDisplay(eval(store + operation + value));
    } else {
      setStore(value);
      setDisplay(value);
    }
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
        <Button onClick={() => handleNumButton("6")}>6</Button>
        <Button onClick={() => handleNumButton("8")}>8</Button>
        <Button onClick={() => handleNumButton("9")}>9</Button>
        <Button color="primary" onClick={() => handleOperationButton("*")}>
          *
        </Button>
        <Button onClick={() => handleNumButton("4")}>4</Button>
        <Button onClick={() => handleNumButton("5")}>5</Button>
        <Button onClick={() => handleNumButton("6")}>6</Button>
        <Button color="primary" onClick={() => handleOperationButton("-")}>
          -
        </Button>
        <Button onClick={() => handleNumButton("1")}>1</Button>
        <Button onClick={() => handleNumButton("2")}>2</Button>
        <Button onClick={() => handleNumButton("3")}>3</Button>
        <Button color="primary" onClick={() => handleOperationButton("+")}>
          +
        </Button>
        <Button
          size="double"
          onClick={() => handleNumButton("0")}
          className={styles.double}
        >
          0
        </Button>
        <Button onClick={() => handleNumButton(".")}>.</Button>
        <Button color="primary" onClick={() => handleOperationButton("=")}>
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
