import React, { useContext } from "react";
import styles from "./task.module.css";
import { BIG_BANG, BIG_CRUNCH, BIG_BANG_YEAR } from "../../constants";
import { getTaskDivHeightWidthTop } from "../../utils/taskUtils";
import { ViewTypeContext } from "../context/viewTypeContext";
import { SelectedTaskContext } from "../context/selectedTaskContext";
import tinycolor from "tinycolor2";
import { Textfit } from "react-textfit";

const Task = (props) => {
  const ctx = useContext(ViewTypeContext);
  const selectedTaskCTX = useContext(SelectedTaskContext);

  const { task, title, containerHeight, containerWidth, data } = props;
  const {
    taskHeight,
    taskWidth,
    taskPositionTop,
    taskPositionLeft,
  } = getTaskDivHeightWidthTop({
    task,
    containerHeight,
    containerWidth,
    viewType: ctx.viewType,
    BIG_BANG,
    BIG_CRUNCH,
    BIG_BANG_YEAR,
  });

  const handleClick = (event) => {
    selectedTaskCTX.setSelectedTask(task);
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
        // fontSize: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Textfit
        mode="multi"
        style={{
          padding: "10px",
          writingMode: taskWidth < taskHeight ? "vertical-rl" : "",
          textOrientation: taskWidth < taskHeight ? "mixed" : "",
          width: taskWidth,
          height: taskHeight,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          color: tinycolor(task.color).isLight()
            ? tinycolor(task.color).darken().darken().darken().toString()
            : tinycolor(task.color).lighten().lighten().lighten().toString(),
        }}
      >
        {task.title}
      </Textfit>
    </div>
  );
};

export { Task };
