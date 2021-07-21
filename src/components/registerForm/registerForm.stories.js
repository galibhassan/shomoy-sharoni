import React from "react";
import { RegisterForm } from "./registerForm";

export default {
  title: "Busy Tomorrows/RegisterForm",
  component: RegisterForm,
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

const Template = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
