import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Icon from "./index";
import type { IconProps } from "./Icon.types";

const meta: Meta<typeof Icon> = {
  title: "Elements/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "default",
      ],
    },
    bgColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "home",
    size: "medium",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="home" size="small" />
      <Icon name="home" size="medium" />
      <Icon name="home" size="large" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="home" color="primary" />
      <Icon name="home" color="secondary" />
      <Icon name="home" color="error" />
      <Icon name="home" color="warning" />
      <Icon name="home" color="info" />
      <Icon name="home" color="success" />
    </div>
  ),
};

export const Icons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="home" />
      <Icon name="settings" />
      <Icon name="user" />
      <Icon name="mail" />
      <Icon name="calendar" />
    </div>
  ),
};

export const SizesAndColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="home" size="large" color="primary" />
      <Icon name="settings" size="medium" color="secondary" />
      <Icon name="user" size="small" color="error" />
    </div>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="home" bgColor="#3B82F6" />
      <Icon name="settings" bgColor="#EF4444" />
      <Icon name="user" bgColor="#10B981" />
      <Icon name="mail" bgColor="#F59E0B" />
    </div>
  ),
};

export const WithBackgroundAndColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="home" bgColor="#3B82F6" color="white" />
      <Icon name="settings" bgColor="#EF4444" color="white" />
      <Icon name="user" bgColor="#10B981" color="white" />
    </div>
  ),
};
