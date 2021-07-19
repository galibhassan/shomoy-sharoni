import React from "react";
import { DateMarkerCell } from "./dateMarkerCell";

export default {
  title: "Busy Tomorrows/DateMarkerCell",
  component: DateMarkerCell,
};

const Template = (args) => <DateMarkerCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  containerWidth: 100,
  divCount: 1,
  height: 80,
  dayCount: 2,
  isToday: false,
  date: {
    year: 2021,
    month: 12,
    day: 10,
  },
};

export const Today = Template.bind({});
Today.args = {
  containerWidth: 100,
  divCount: 1,
  height: 80,
  dayCount: 2,
  isToday: true,
  date: {
    year: 2021,
    month: 12,
    day: 10,
  },
};
