import React from "react";

import Button from "../components/Button/Button";
import CustomMDXDocumentation from "./Custom-MDX-Documentation.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

// export default {
//   title: 'Button',
//   component: Button,
//   decorators: [
//     (Story) => (
//       <div style={{ margin: '3em' }}>
//         <Story />
//       </div>
//     ),
//   ],
// };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

Primary.parameters = {
  backgrounds: {
    values: [
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
      { name: "blue", value: "#00f" },
    ],
  },
};

Primary.decorators = [
  (Story) => (
    <div style={{ margin: "3em" }}>
      <Story />
    </div>
  ),
];

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
