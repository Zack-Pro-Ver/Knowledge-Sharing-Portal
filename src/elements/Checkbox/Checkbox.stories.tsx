import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Checkbox from "./index";
import type { CheckboxProps } from "./Checkbox.types";

const meta: Meta<typeof Checkbox> = {
  title: "Elements/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    indeterminate: {
      control: "boolean",
    },
    checkboxSize: {
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
    labelPlacement: {
      control: "select",
      options: ["end", "start", "top", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Checkbox",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked Checkbox",
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: "Unchecked Checkbox",
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Indeterminate Checkbox",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Checkbox",
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    label: "Disabled Checked",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox checkboxSize="small" label="Small Checkbox" />
      <Checkbox checkboxSize="medium" label="Medium Checkbox" />
      <Checkbox checkboxSize="large" label="Large Checkbox" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox color="primary" label="Primary" />
      <Checkbox color="secondary" label="Secondary" />
      <Checkbox color="error" label="Error" />
      <Checkbox color="warning" label="Warning" />
      <Checkbox color="info" label="Info" />
      <Checkbox color="success" label="Success" />
    </div>
  ),
};

export const LabelPlacement: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox labelPlacement="start" label="Label Start" />
      <Checkbox labelPlacement="end" label="Label End" />
      <Checkbox labelPlacement="top" label="Label Top" />
      <Checkbox labelPlacement="bottom" label="Label Bottom" />
    </div>
  ),
};

export const Interactive: Story = {
  render: function Render() {
    const [checked, setChecked] = React.useState(false);

    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Interactive Checkbox"
      />
    );
  },
};
