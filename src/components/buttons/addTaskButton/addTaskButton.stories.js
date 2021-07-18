import React from "react";
import { AddTaskButton } from "./addTaskButton";

export default {
  title: "Busy Tomorrows/AddTaskButton",
  component: AddTaskButton,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <AddTaskButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
