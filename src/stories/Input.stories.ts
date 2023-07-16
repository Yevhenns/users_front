import type { StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "UI/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Name",
  },
};
