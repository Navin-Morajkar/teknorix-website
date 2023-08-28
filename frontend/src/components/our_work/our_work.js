import React from "react";
import Style from "../container_left/container_left.module.css";
import Styles from "../our_jobs/our_jobs.module.css";

const our_work = () => {
  return (
    <div className={Style.flexContainer}>
      <div className={Style.alignLeft}>
        <div className={Styles.card}>
          <h1>Our Work</h1>
          <button className={Styles.buttonGreen}>Explore now</button>
        </div>
      </div>
    </div>
  );
};

export default our_work;
