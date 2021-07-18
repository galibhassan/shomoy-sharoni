import styles from "./taskDetail.module.css";
import { getMonthFromNumber } from "../../utils/getMonthFromNumber";
import { getDayInWeek } from "../../utils/getDayInWeek";
import { getAbsDays } from "../../utils/taskUtils";
import { BIG_BANG_YEAR } from "../../constants";
import tinycolor from "tinycolor2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEdit } from "@fortawesome/free-solid-svg-icons";

const STARTING_WEEKDAY_BIGBANG = 6;

export const TaskDetail = (props) => {
  const { title, startingTime, endingTime, color: taskColor } = props;
  const { day: dayNum, month, year } = props.date;

  const getColors = (taskColor) => {
    const lum = tinycolor(taskColor).getLuminance();
    let rectColor;
    if (lum > 0.5) rectColor = tinycolor(taskColor).darken().darken();
    else rectColor = tinycolor(taskColor).brighten().brighten();

    return {
      rectColor: rectColor.toString(),
      timeTextColor: rectColor.complement().toString(),
    };
  };

  console.log(getColors(taskColor));

  const getStatusIndicatorColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "#1ba8f0"; //blue
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
      <div
        className={styles.rectangle}
        style={{
          backgroundColor: getColors(taskColor).rectColor,
        }}
      >
        <div className={styles.year} style={{ color: taskColor }}>
          {year}
        </div>
      </div>
      <div
        className={styles.dateContainer}
        style={{ color: getColors(taskColor).rectColor }}
      >
        <div className={styles.monthAndDay}>
          {monthString} {dayNum}
        </div>
        <div className={styles.dayInWeek}>{dayWeek}day</div>
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.timeContainer}>
        <div
          className={styles.clockContainer}
          style={{
            backgroundColor: taskColor,
          }}
        >
          <FontAwesomeIcon
            icon={faClock}
            size="md"
            color={getStatusIndicatorColor(props.status)}
          />
        </div>
        <span
          className={styles.time}
          style={{
            color: getColors(taskColor).timeTextColor,
          }}
        >
          {startingTime} - {endingTime}
        </span>
      </div>
      <div className={styles.footer}>
        <FontAwesomeIcon
          icon={faEdit}
          size="2x"
          opacity={0.9}
          color={taskColor}
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
