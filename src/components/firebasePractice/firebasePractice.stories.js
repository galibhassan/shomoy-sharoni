import React from "react";
import { FirebasePractice } from "./firebasePractice";

export default {
  title: "TEMP/FirebasePractice",
  component: FirebasePractice,
};

const Template = (args) => <FirebasePractice {...args} />;

export const Default = Template.bind({});
Default.args = {};
