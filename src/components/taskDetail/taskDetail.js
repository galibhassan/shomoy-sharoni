import styles from "./taskDetail.module.css";
import { getMonthFromNumber } from "../../utils/getMonthFromNumber";
import { getDayInWeek } from "../../utils/getDayInWeek";
import { getAbsDays } from "../../utils/taskUtils";
import { BIG_BANG_YEAR } from "../../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEdit } from "@fortawesome/free-solid-svg-icons";

const STARTING_WEEKDAY_BIGBANG = 6;

export const TaskDetail = (props) => {
  const { title, startingTime, endingTime, color: taskColor } = props;
  const { day: dayNum, month, year } = props.date;

  const getStatusIndicatorColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "blue";
      case "InProgress":
        return "orange";
      case "Done":
        return "green";
      case "Pending":
        return "yellow";
      case "Failed":
        return "red";
      case "Cancelled":
        return "darkgray";
    }
  };

  const dayWeek = getDayInWeek(
    getAbsDays(
      {
        date: { day: dayNum, month, year },
      },
      BIG_BANG_YEAR
    ),
    STARTING_WEEKDAY_BIGBANG
  );
  const monthString = getMonthFromNumber(month);
  return (
    <div className={styles.taskDetails} style={{ backgroundColor: taskColor }}>
      <div className={styles.rectangle}></div>
      <div className={styles.dateContainer}>
        <div className={styles.monthAndDay}>
          {monthString} {dayNum}
        </div>
        <div className={styles.dayInWeek}>{dayWeek}day</div>
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.timeContainer}>
        <FontAwesomeIcon
          icon={faClock}
          size="md"
          color={getStatusIndicatorColor(props.status)}
        />
        <span className={styles.time}>
          {startingTime} - {endingTime}
        </span>
      </div>
      <div className={styles.footer}>
        <FontAwesomeIcon
          icon={faEdit}
          size="2x"
          opacity={0.9}
          color="#FF4350"
        />
        <div className={styles.statusContainer}>
          <div
            className={styles.statusIndicator}
            style={{
              backgroundColor: getStatusIndicatorColor(props.status),
            }}
          ></div>
          <div className={styles.statusString}>{props.status}</div>
        </div>
      </div>
    </div>
  );
};
