import type { Meta, StoryObj } from "@storybook/react-vite";
import IconButton from ".";

const meta: Meta<typeof IconButton> = {
  title: "Elements/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
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
