import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import Dropdown from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Elements/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
   argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
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
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
];
export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Select an option",
  },
};
export const Outlined: Story = {
  args: {
    variant: "outlined",
    options: sampleOptions,
    placeholder: "Select an option",
  },
};
export const WithValue: Story = {
  args: {
    options: sampleOptions,
    value: "option2",
    placeholder: "Select an option",
  },
};
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Dropdown size="small" options={sampleOptions} placeholder="Small" />
      <Dropdown size="medium" options={sampleOptions} placeholder="Medium" />
      <Dropdown size="large" options={sampleOptions} placeholder="Large" />
    </div>
  ),
};
export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Dropdown color="primary" options={sampleOptions} placeholder="Primary" />
      <Dropdown
        color="secondary"
        options={sampleOptions}
        placeholder="Secondary"
      />
      <Dropdown color="error" options={sampleOptions} placeholder="Error" />
    </div>
  ),
};
export const Interactive: Story = {
  render: function Render() {
    const [value, setValue] = React.useState("");

    return (
      <Dropdown
        options={sampleOptions}
        value={value}
        onChange={setValue}
        placeholder="Select an option"
      />
    );
  },
};
