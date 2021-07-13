import { useState } from "react";
import { Dropdown } from "../dropdown/dropdown";
import { Task } from "../task/task";
import styles from "./container.module.css";

const Container = (props) => {
  const [viewType, setViewType] = useState("week");
  const { schedule: tasks } = props;
  const containerHeight = 200;
  const containerWidth = 600;

  const onViewTypeChange = (changedViewType) => {
    setViewType(changedViewType);
  };

  const renderTasks = () => {
    return tasks.map((task, i) => {
      const { startingTime, endingTime, title, date: taskDate } = task;
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
    </div>
  );
};

export { Container };
