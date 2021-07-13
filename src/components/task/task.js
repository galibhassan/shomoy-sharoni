import React, { useState } from "react";
import styles from "./task.module.css";
import { BIG_BANG, BIG_CRUNCH } from "../../constants";
import { getTaskDivHeightWidthTop } from "../../utils/taskUtils";

const Task = (props) => {
  const {
    startingTime,
    endingTime,
    title,
    containerHeight,
    containerWidth,
    viewType,
  } = props;
  const { taskHeight, taskWidth, taskPositionTop } = getTaskDivHeightWidthTop({
    startingTime,
    endingTime,
    containerHeight,
    containerWidth,
    viewType,
    BIG_BANG,
    BIG_CRUNCH,
  });

  const handleClick = (event) => {
    alert(title);
  };

  return (
    <div
      className={styles.task}
      onClick={handleClick}
      style={{
        height: taskHeight,
        width: taskWidth,
        top: taskPositionTop,
        left: "50px",
      }}
    ></div>
  );
};

export { Task };
