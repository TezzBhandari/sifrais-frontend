import React from "react";
import styles from "../FormComponent.module.css";

const Generalinfo = () => {
  return (
    <div>
      <h1 id={styles.ctitle} className="underline">
        General Info:
      </h1>
      <div className={`flex flex-row ${styles.generalInfo}`}>
        <div className="flex flex-row">
          <h1>House No.: </h1>
          <p>23 La P</p>
        </div>
        <div className="flex flex-row">
          <h1>Vehicle Type: </h1>
          <p>Car</p>
        </div>
        <div className="flex flex-row">
          <h1>Vehicle Number: </h1>
          <p>Lu 52 1777</p>
        </div>
        <div className="flex flex-row">
          <h1>House Storey: </h1>
          <p>11</p>
        </div>
        <div className="flex flex-row">
          <h1>House stoyred: </h1>
          <p>How Boss</p>
        </div>
        <div className="flex flex-row">
          <h1>Small Family: </h1>
          <p>Yes</p>
        </div>
        <div className="flex flex-row">
          <h1>Has pets </h1>
          <p>No</p>
        </div>

      </div>
    </div>
  );
};

export default Generalinfo;
