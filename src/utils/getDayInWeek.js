export const getDayInWeek = (absDays, startingWeekDay_bigbang) => {
  switch (Math.abs(absDays + startingWeekDay_bigbang) % 7) {
    case 0:
      return "Sat";
    case 1:
      return "Sun";
    case 2:
      return "Mon";
    case 3:
      return "Tue";
    case 4:
      return "Wed";
    case 5:
      return "Thu";
    case 6:
      return "Fri";
  }
};
