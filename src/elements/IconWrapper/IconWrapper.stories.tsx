import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconWrapper } from ".";
import { RiUser3Fill } from "@remixicon/react";

const meta: Meta<typeof IconWrapper> = {
  title: "Elements/IconWrapper",
  component: IconWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: "bg-blue-500",
    children: <RiUser3Fill color="pink" />,
  },
};
