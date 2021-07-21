import React from "react";
import { AddTaskForm } from "./addTaskForm";

export default {
  title: "Busy Tomorrows/AddTaskForm",
  component: AddTaskForm,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif"
          
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <AddTaskForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
