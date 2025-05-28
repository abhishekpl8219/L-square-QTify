import React from "react";
import styles from "./Logo.module.css";
import LogoImg from "../../Assets/Logo1.png";

const Logo = () => {
  return (
    <div className={styles.logoDiv}>
      <img src={LogoImg} width={67} alt="logo" />
    </div>
  );
};

export default Logo;
