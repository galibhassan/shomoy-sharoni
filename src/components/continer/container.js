import { DateMarker } from "../dateMarker/dateMarker";
import { Task } from "../task/task";
import styles from "./container.module.css";
import { getAbsDays } from "../../utils/taskUtils";
import { BIG_BANG_YEAR } from "../../constants";

const Container = (props) => {
  const { tasks, containerHeight, containerWidth } = props;

  const dateMarkerHeight = 50
  const OFFSET = 9

  const renderTasks = () => {
    return tasks.map((task, i) => {
      const { title } = task;
      const absDays = getAbsDays(task, BIG_BANG_YEAR);
      return (
        <Task
          task={task}
          title={title}
          containerHeight={containerHeight - dateMarkerHeight-OFFSET}
          containerWidth={containerWidth}
          key={i}
          data={{ absDays }}
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
      {renderTasks()}
      <DateMarker
        positionTop={containerHeight-dateMarkerHeight-OFFSET}
        containerWidth={containerWidth}
        tasks={tasks}
        height={dateMarkerHeight}
      />
    </div>
  );
};

export { Container };
