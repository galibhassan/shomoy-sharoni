import styles from "./dateMarkerCell.module.css";
import { BIG_BANG_DAY_WEEK } from "../../constants";
import { getDayInWeek } from "../../utils/getDayInWeek";
import { getMonthFromNumber } from "../../utils/getMonthFromNumber";

export const DateMarkerCell = (props) => {
  const { containerWidth, divCount, height, dayCount, isToday, date } = props;
  const { year, month, day } = date;
  return (
    <div
      className={styles.dateMarkerCell}
      style={{
        width: containerWidth / divCount,
        height: isToday ? height + 10 : height,
        backgroundColor: isToday ? "#5661CA" : "#F8F8F8",
        color: isToday ? "#FDFAFFdd" : "#3C334399",
        borderRadius: isToday ? 10 : 0,
      }}
    >
      <div className={styles.footer}>
        {getDayInWeek(dayCount, BIG_BANG_DAY_WEEK)}day
      </div>
      <div className={styles.main}>{day}</div>
      <div className={styles.header}>
        {year} {getMonthFromNumber(month)}
      </div>
    </div>
  );
};
