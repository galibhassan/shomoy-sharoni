import React from "react";
import { TaskDetail } from "./taskDetail";

export default {
  title: "Busy Tomorrows/TaskDetail",
  component: TaskDetail,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <TaskDetail {...args} />;

export const Done = Template.bind({});
Done.args = {
  title: "Walking in the park",
  date: { year: 2021, month: 1, day: 3 },
  startingTime: "10:18",
  endingTime: "11:16",
  color: "#FF4350",
  status: "Done",
};

export const Pending = Template.bind({});
Pending.args = {
  title: "Walking in the park",
  date: { year: 2021, month: 1, day: 3 },
  startingTime: "10:18",
  endingTime: "11:16",
  color: "#FF4350",
  status: "Pending",
};

export const Failed = Template.bind({});
Failed.args = {
  title: "Walking in the park",
  date: { year: 2021, month: 1, day: 3 },
  startingTime: "10:18",
  endingTime: "11:16",
  color: "#FF4350",
  status: "Failed",
};

export const Cancelled = Template.bind({});
Cancelled.args = {
  title: "Walking in the park",
  date: { year: 2021, month: 1, day: 3 },
  startingTime: "10:18",
  endingTime: "11:16",
  color: "#FF4350",
  status: "Cancelled",
};

export const Upcoming = Template.bind({});
Upcoming.args = {
  title: "Walking in the park",
  date: { year: 2021, month: 1, day: 3 },
  startingTime: "10:18",
  endingTime: "11:16",
  color: "#FF4350",
  status: "Upcoming",
};

export const InProgress = Template.bind({});
InProgress.args = {
  title: "Walking in the park",
  date: { year: 2021, month: 1, day: 3 },
  startingTime: "10:18",
  endingTime: "11:16",
  color: "#FF4350",
  status: "InProgress",
};
