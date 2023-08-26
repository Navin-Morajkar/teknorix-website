import React from "react";
import Styles from "../our_Jobs/our_jobs.module.css";

import Image from "next/image";
const our_jobs = () => {
  return (
    <div>
      <div className={Styles.card}>
        <div className={Styles.initialDetails}>
          <Image
            src="/images/image1.jpg"
            alt="My Image"
            width={310}
            height={310}
          />
          <h3 className={Styles.title}>Hover Me</h3>
        </div>
        <div className={Styles.details}>
          <p>
            Additional details that appear on hover.Additional details that
            appear on hover.Additional details that appear on hover.
          </p>
          <button className={Styles.arrowButton}>+</button>
        </div>
      </div>
    </div>
  );
};

export default our_jobs;
