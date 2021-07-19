import styles from "./dateMarkerCell.module.css";
import { BIG_BANG_DAY_WEEK } from "../../constants";
import { getDayInWeek } from "../../utils/getDayInWeek";

export const DateMarkerCell = (props) => {
  const { containerWidth, divCount, height, dayCount } = props;
  return (
    <div
      className={styles.dateMarkerCell}
      style={{
        width: containerWidth / divCount,
        height: height,
      }}
    >
      <div className={styles.header}>
        {getDayInWeek(dayCount, BIG_BANG_DAY_WEEK)}
      </div>
      <div className={styles.main}>{dayCount}</div>
      <div className={styles.footer}></div>
    </div>
  );
};
