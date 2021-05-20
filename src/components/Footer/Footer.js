import React from "react";
import styles from "./Footer.module.css";

const createYear = 2021;
const currentYear = new Date().getFullYear();
const period =
  createYear === currentYear ? createYear : `${createYear} – ${currentYear}`;

const Footer = () => {
  return (
    <div className={styles.root}>
      &copy; {period}. Калькулятор. Тестовое задание для компании{" "}
      <span className={styles.company}>&laquo;РК-Технологии&raquo;</span>.
    </div>
  );
};

export default Footer;
