import React from "react";
import styles from "./Loading.module.scss";

const LoadingPlaceholder: React.FC = () => {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles["loading-icon"]}>
        <div className={styles["icon-placeholder"]}></div>
        <span className={styles["brand-name"]}>Generating...</span>
      </div>
      <div className={styles["loading-box"]}>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
        <div className={styles["line"] + " " + styles["short"]}></div>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;
