import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import IconDropdown from "./index";
import type { IconDropdownProps } from "./IconDropdown.types";

const meta: Meta<typeof IconDropdown> = {
  title: "Elements/IconDropdown",
  component: IconDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Option 1",
        icon: undefined,
        onClick: function (): void {
          throw new Error("Function not implemented.");
        },
      },
      {
        label: "Option 2",
        icon: undefined,
        onClick: function (): void {
          throw new Error("Function not implemented.");
        },
      },
      {
        label: "Option 3",
        icon: undefined,
        onClick: function (): void {
          throw new Error("Function not implemented.");
        },
      },
    ],
    buttonLabel: "Select an option",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Choose Action",
    items: [
      { label: "Edit", value: "edit" },
      { label: "Delete", value: "delete" },
      { label: "Share", value: "share" },
    ],
    placeholder: "Select action",
  },
};

export const Disabled: Story = {
  args: {
    items: [
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
        items={[
          { label: "Small", value: "small" },
          { label: "Medium", value: "medium" },
          { label: "Large", value: "large" },
        ]}
        placeholder="Small dropdown"
      />
      <IconDropdown
        size="medium"
        items={[
          { label: "Small", value: "small" },
          { label: "Medium", value: "medium" },
          { label: "Large", value: "large" },
        ]}
        placeholder="Medium dropdown"
      />
      <IconDropdown
        size="large"
        items={[
          { label: "Small", value: "small" },
          { label: "Medium", value: "medium" },
          { label: "Large", value: "large" },
        ]}
        placeholder="Large dropdown"
      />
    </div>
  ),
};
