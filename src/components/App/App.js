import React from "react";
import styles from "./App.module.css";
import Calculator from "../Calculator/Calculator";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.calcWrapper}>
        <Calculator />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
