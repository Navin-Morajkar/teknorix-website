import React from "react";
import Style from "../ContainerLeft/ContainerLeft.module.css";
import Styles from "../OurJobs/OurJobs.module.css";

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
