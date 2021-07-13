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

export const getAbsDays = (task, BIG_BANG_YEAR) => {
  const { year, month, day } = task.date;
  const daysInMonths = [
    31,
    year % 4 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  let yearsToDays = 0;
  for (let i = 0; i < year - BIG_BANG_YEAR; i++) {
    yearsToDays += (BIG_BANG_YEAR + i) % 4 === 0 ? 366 : 365;
  }

  let monthToDays = 0;
  for (let i = 0; i < month - 1; i++) {
    monthToDays += daysInMonths[i];
  }

  const output = yearsToDays + monthToDays + day;
  return output;
};

export const getTaskDivHeightWidthTop = ({
  task,
  containerHeight,
  containerWidth,
  viewType,
  BIG_BANG,
  BIG_CRUNCH,
  BIG_BANG_YEAR,
}) => {
  const workdayDuration = getAbsMinute(BIG_CRUNCH, BIG_BANG);
  const taskDuration =
    getAbsMinute(task.endingTime, BIG_BANG) -
    getAbsMinute(task.startingTime, BIG_BANG);
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
    getAbsMinute(task.startingTime, BIG_BANG) * scaleVert
  );

  const taskPositionLeft = parseInt(
    getAbsDays(task, BIG_BANG_YEAR) * scaleHoriz - scaleHoriz
  );

  return { taskHeight, taskWidth, taskPositionTop, taskPositionLeft };
};
