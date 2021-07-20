import React from "react";
import { LoginForm } from "./loginForm";

export default {
  title: "Busy Tomorrows/LoginForm",
  component: LoginForm,
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

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
