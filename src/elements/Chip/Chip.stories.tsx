import type { Meta, StoryObj } from "@storybook/react";
import Chip from ".";

const meta: Meta<typeof Chip> = {
  title: "Elements/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Chip",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Chip label="Default" />
      <Chip variant="outlined" label="Outlined" />
      <Chip variant="filled" label="Filled" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Chip color="primary" label="Primary" />
      <Chip color="secondary" label="Secondary" />
      <Chip color="error" label="Error" />
      <Chip color="warning" label="Warning" />
      <Chip color="info" label="Info" />
      <Chip color="success" label="Success" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip size="small" label="Small" />
      <Chip size="medium" label="Medium" />
      <Chip size="large" label="Large" />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    label: "With Icon",
    icon: "🔥",
  },
};

export const Deletable: Story = {
  args: {
    label: "Deletable",
    onDelete: () => alert("Chip deleted!"),
  },
};

export const Clickable: Story = {
  args: {
    label: "Clickable",
    onClick: () => alert("Chip clicked!"),
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const WithDeleteIcon: Story = {
  args: {
    label: "Custom Delete",
    onDelete: () => alert("Deleted!"),
    deleteIcon: "✕",
  },
};
