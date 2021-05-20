import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Button.module.css";

const Button = ({ children, onClick, color, size }) => {
  const btnClass = classnames(styles.root, styles[color], styles[size]);

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string,
};
