import React from "react";
import { AuthButton } from "./authButton";

export default {
  title: "Busy Tomorrows/AuthButton",
  component: AuthButton,
};

const Template = (args) => <AuthButton {...args} />;

export const Login = Template.bind({});
Login.args = {
  buttonType: "BUTTON_LOGIN",
};

export const Register = Template.bind({});
Register.args = {
  buttonType: "BUTTON_REGESTER",
};
