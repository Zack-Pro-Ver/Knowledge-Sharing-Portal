import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import IconDropdown from "./index";
import type { IconDropdownProps } from "./IconDropdown.types";

const meta: Meta<typeof IconDropdown> = {
  title: "Elements/IconDropdown",
  component: IconDropdown,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    placeholder: "Select an option",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Choose Action",
    options: [
      { label: "Edit", value: "edit" },
      { label: "Delete", value: "delete" },
      { label: "Share", value: "share" },
    ],
    placeholder: "Select action",
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
    ],
    disabled: true,
    placeholder: "Disabled dropdown",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <IconDropdown
        size="small"
        options={[
          { label: "Small", value: "small" },
          { label: "Medium", value: "medium" },
          { label: "Large", value: "large" },
        ]}
        placeholder="Small dropdown"
      />
      <IconDropdown
        size="medium"
        options={[
          { label: "Small", value: "small" },
          { label: "Medium", value: "medium" },
          { label: "Large", value: "large" },
        ]}
        placeholder="Medium dropdown"
      />
      <IconDropdown
        size="large"
        options={[
          { label: "Small", value: "small" },
          { label: "Medium", value: "medium" },
          { label: "Large", value: "large" },
        ]}
        placeholder="Large dropdown"
      />
    </div>
  ),
};
