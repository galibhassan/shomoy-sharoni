import { DateMarker } from "../dateMarker/dateMarker";
import { Task } from "../task/task";
import styles from "./container.module.css";
import { getAbsDays } from "../../utils/taskUtils";
import { BIG_BANG_YEAR } from "../../constants";

const Container = (props) => {
  const { schedule: tasks } = props;

  const absDaysOfTasks = tasks.map((task) => {
    const absDays = getAbsDays(task, BIG_BANG_YEAR);
    return absDays;
  });
  const maxDayCount = Math.max(...absDaysOfTasks);
  const minDayCount = Math.min(...absDaysOfTasks);
  const horizSegmentCount = maxDayCount - minDayCount + 1;

  const containerHeight = parseInt(window.innerHeight / 1) - 100;
  const containerWidth = parseInt(window.innerWidth / 1);

  const renderTasks = () => {
    return tasks.map((task, i) => {
      const { title } = task;
      const absDays = getAbsDays(task, BIG_BANG_YEAR);
      return (
        <Task
          task={task}
          title={title}
          containerHeight={containerHeight}
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
        positionTop={containerHeight}
        horizSegmentCount={horizSegmentCount}
        containerWidth={containerWidth}
      />
    </div>
  );
};

export { Container };
