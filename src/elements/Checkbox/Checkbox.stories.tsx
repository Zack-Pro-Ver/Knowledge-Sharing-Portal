import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import Checkbox from ".";
const meta: Meta<typeof Checkbox> = {
  title: "Elements/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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

// Todo: Will work on this later
// export const Indeterminate: Story = {
//   args: {
//     indeterminate: true,
//     label: "Indeterminate Checkbox",
//   },
// };
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
