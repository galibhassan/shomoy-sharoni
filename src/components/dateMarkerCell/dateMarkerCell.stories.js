import React from "react";
import { DateMarkerCell } from "./dateMarkerCell";

export default {
  title: "Busy Tomorrows/DateMarkerCell",
  component: DateMarkerCell,
  /* argTypes: {
     color: { control: "color" },
  }, */
};

const Template = (args) => <DateMarkerCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  containerWidth:50,
   divCount:1,
   height:50,
   dayCount:2

};
