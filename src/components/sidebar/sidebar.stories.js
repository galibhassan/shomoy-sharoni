import React from "react";
import { SideBar } from "./sidebar";

export default {
  title: "Busy Tomorrows/Sidebar",
  component: SideBar,
  argTypes: {
     color: { control: "color" },
  },
};

const Template = (args) => <SideBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
