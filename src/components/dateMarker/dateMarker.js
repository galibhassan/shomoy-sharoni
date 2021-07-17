import styles from "./dateMarker.module.css";
import { BIG_BANG_DAY_WEEK } from "../../constants";
import { getDayInWeek } from "../../utils/getDayInWeek";
import { ViewTypeContext } from "../context/viewTypeContext";
import { useContext } from "react";

export const DateMarker = (props) => {
  const ctx = useContext(ViewTypeContext);
  const { positionTop, containerWidth, horizSegmentCount } = props;

  const { viewType } = ctx;
  const getHorizSegmentsCount = () => {
    if (viewType === "week") return 7;
    else if (viewType === "twoWeeks") return 7 * 2;
    else if (viewType === "threeWeeks") return 7 * 3;
    else return 0;
  };

  const renderHorizSegmentDivs = () => {
    const divCount = getHorizSegmentsCount();
    const divs = [];
    for (let i = 0; i < horizSegmentCount; i++) {
      divs.push(
        <div
          key={i}
          style={{
            width: containerWidth / divCount,
            height: 30,
            backgroundColor: "rgba(0,0,0,.8)",
            color: "white",
            fontSize: 11,
            boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {getDayInWeek(i, BIG_BANG_DAY_WEEK)}
        </div>
      );
    }
    return divs;
  };

  return (
    <div
      className={styles.dateMarkerContainer}
      style={{
        top: positionTop,
        display: "flex",
        flexDirection: "row",
      }}
    >
      {renderHorizSegmentDivs()}
    </div>
  );
};
