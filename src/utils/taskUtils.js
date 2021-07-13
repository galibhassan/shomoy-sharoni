// timeStr or bigbang ~ 10:30
const getAbsMinute = (timeStr, bigbang) => {
  const timeArr = timeStr.split(":");
  const hour = parseInt(timeArr[0])
  const minute = parseInt(timeArr[1])
  const bigbangArr = bigbang.split(":");
  const bigbangHour = parseInt(bigbangArr[0])
  const bigbangMinute = parseInt(bigbangArr[1])
  const absMinute = (hour * 60 + minute) - (bigbangHour * 60 + bigbangMinute)
  return absMinute
}

export const getTaskDivHeightWidthTop = ({ startingTime, endingTime, containerHeight, containerWidth, viewType, BIG_BANG, BIG_CRUNCH }) => {
  const workdayDuration = getAbsMinute(BIG_CRUNCH, BIG_BANG)
  const taskDuration = getAbsMinute(endingTime, BIG_BANG) - getAbsMinute(startingTime, BIG_BANG)
  const scaleVert = containerHeight / workdayDuration
  const daysInMonth = 30
  const daysInYear = 365
  let scaleHoriz
  if(viewType==='week') scaleHoriz = containerWidth / 7
  else if (viewType==='month') scaleHoriz = containerWidth / daysInMonth
  else if (viewType==='year') scaleHoriz = containerWidth / daysInYear
  else scaleHoriz = containerWidth / 15

  console.log({viewType, containerWidth, scaleHoriz})

  const taskHeight = parseInt(taskDuration * scaleVert)
  const taskWidth = parseInt(scaleHoriz)
  const taskPositionTop = parseInt(getAbsMinute(startingTime, BIG_BANG) * scaleVert)

  return { taskHeight, taskWidth, taskPositionTop }
}