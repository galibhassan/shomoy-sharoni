// timeStr or bigbang ~ 10:30
const getAbsMinute = (timeStr, bigbang) => {
  const timeArr = timeStr.split(":");
  const hour = parseInt(timeArr[0]);
  const minute = parseInt(timeArr[1]);
  const bigbangArr = bigbang.split(":");
  const bigbangHour = parseInt(bigbangArr[0]);
  const bigbangMinute = parseInt(bigbangArr[1]);
  const absMinute = hour * 60 + minute - (bigbangHour * 60 + bigbangMinute);
  return absMinute;
};

export const getTaskDivHeightWidthTop = ({
  startingTime,
  endingTime,
  containerHeight,
  containerWidth,
  viewType,
  BIG_BANG,
  BIG_CRUNCH,
}) => {
  const workdayDuration = getAbsMinute(BIG_CRUNCH, BIG_BANG);
  const taskDuration =
    getAbsMinute(endingTime, BIG_BANG) - getAbsMinute(startingTime, BIG_BANG);
  const scaleVert = containerHeight / workdayDuration;
  const daysInMonth = 30;
  const daysInYear = 365;
  const daysInWeek = 7;
  let scaleHoriz;
  if (viewType === "week") scaleHoriz = containerWidth / daysInWeek;
  else if (viewType === "twoWeeks")
    scaleHoriz = containerWidth / (daysInWeek * 2);
  else if (viewType === "threeWeeks")
    scaleHoriz = containerWidth / (daysInWeek * 3);
  else if (viewType === "month") scaleHoriz = containerWidth / daysInMonth;
  else if (viewType === "twoMonths")
    scaleHoriz = containerWidth / (daysInMonth * 2);
  else if (viewType === "threeMonths")
    scaleHoriz = containerWidth / (daysInMonth * 3);
  else if (viewType === "year") scaleHoriz = containerWidth / daysInYear;
  else scaleHoriz = containerWidth / 15;

  console.log({ viewType, containerWidth, scaleHoriz });

  const taskHeight = parseInt(taskDuration * scaleVert);
  const taskWidth = parseInt(scaleHoriz);
  const taskPositionTop = parseInt(
    getAbsMinute(startingTime, BIG_BANG) * scaleVert
  );

  return { taskHeight, taskWidth, taskPositionTop };
};
