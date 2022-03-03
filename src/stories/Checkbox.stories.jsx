import React from "react";

import Checkbox from "../components/Checkbox/Checkbox";

export default {
  title: "MDX/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const UnChecked = Template.bind({});
UnChecked.args = {
  checked: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Some text",
  checked: true,
};
