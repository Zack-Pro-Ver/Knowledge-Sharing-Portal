import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import IconButton from "./index";
import type { IconButtonProps } from "./IconButton.types";

const meta: Meta<typeof IconButton> = {
  title: "Elements/IconButton",
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "🎯",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton size="small">🔍</IconButton>
      <IconButton size="medium">🔍</IconButton>
      <IconButton size="large">🔍</IconButton>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <IconButton color="primary">⭐</IconButton>
      <IconButton color="secondary">⭐</IconButton>
      <IconButton color="error">⭐</IconButton>
      <IconButton color="warning">⭐</IconButton>
      <IconButton color="info">⭐</IconButton>
      <IconButton color="success">⭐</IconButton>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton variant="text">📄</IconButton>
      <IconButton variant="outlined">📄</IconButton>
      <IconButton variant="contained">📄</IconButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "🚫",
  },
};

export const Edge: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton edge="start">⬅️</IconButton>
      <IconButton edge="end">➡️</IconButton>
    </div>
  ),
};
