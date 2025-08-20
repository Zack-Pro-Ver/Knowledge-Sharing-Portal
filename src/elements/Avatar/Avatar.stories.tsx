import type { Meta, StoryObj } from "@storybook/react";
import Avatar from ".";
import type { AvatarProps } from "./Avatar.types";

const meta: Meta<typeof Avatar> = {
  title: "Elements/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "A",
  },
};

export const Image: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "User Avatar",
  },
};

export const Letter: Story = {
  args: {
    children: "JD",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="small">S</Avatar>
      <Avatar size="medium">M</Avatar>
      <Avatar size="large">L</Avatar>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar variant="circular">C</Avatar>
      <Avatar variant="rounded">R</Avatar>
      <Avatar variant="square">S</Avatar>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar backgroundColor="#3b82f6" textColor="white">
        B
      </Avatar>
      <Avatar backgroundColor="#ef4444" textColor="white">
        R
      </Avatar>
      <Avatar backgroundColor="#10b981" textColor="white">
        G
      </Avatar>
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    children: "C",
    onClick: () => alert("Avatar clicked!"),
  },
};
