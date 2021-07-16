import { useState } from "react";
import { DateMarker } from "../dateMarker/dateMarker";
import { Dropdown } from "../dropdown/dropdown";
import { Task } from "../task/task";
import styles from "./container.module.css";

const Container = (props) => {
  const [viewType, setViewType] = useState("week");
  const { schedule: tasks } = props;

  const containerHeight = parseInt(window.innerHeight / 1) - 100;
  const containerWidth = parseInt(window.innerWidth / 1);

  const onViewTypeChange = (changedViewType) => {
    setViewType(changedViewType);
  };

  const renderTasks = () => {
    return tasks.map((task, i) => {
      const {title} = task;
      return (
        <Task
          task={task}
          title={title}
          containerHeight={containerHeight}
          containerWidth={containerWidth}
          viewType={viewType}
          key={i}
        />
      );
    });
  };

  return (
    <div
      className={styles.container}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
    >
      <Dropdown onViewTypeChange={onViewTypeChange} />
      {renderTasks()}
      <DateMarker
        positionTop={containerHeight-20}
        viewType={viewType}
        containerWidth={containerWidth}
      />
    </div>
  );
};

export { Container };
