import React, { useContext } from "react";
import styles from "./task.module.css";
import { BIG_BANG, BIG_CRUNCH, BIG_BANG_YEAR } from "../../constants";
import { getTaskDivHeightWidthTop } from "../../utils/taskUtils";
import { ViewTypeContext } from "../context/viewTypeContext";
import {SelectedTaskContext} from "../context/selectedTaskContext"

const Task = (props) => {
  const ctx = useContext(ViewTypeContext);
  const selectedTaskCTX = useContext(SelectedTaskContext)

  const { task, title, containerHeight, containerWidth, data } = props;
  const { taskHeight, taskWidth, taskPositionTop, taskPositionLeft } =
    getTaskDivHeightWidthTop({
      task,
      containerHeight,
      containerWidth,
      viewType: ctx.viewType,
      BIG_BANG,
      BIG_CRUNCH,
      BIG_BANG_YEAR,
    });

  const handleClick = (event) => {
    selectedTaskCTX.setSelectedTask(task)
  };

  return (
    <div
      className={styles.task}
      onClick={handleClick}
      style={{
        height: taskHeight,
        width: taskWidth,
        top: taskPositionTop,
        left: taskPositionLeft,
        color: "white",
        backgroundColor: task.color,
        fontSize: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* {data.absDays} */}
    </div>
  );
};

export { Task };
