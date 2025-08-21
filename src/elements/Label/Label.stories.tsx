import type { Meta, StoryObj } from "@storybook/react-vite";
import Label from ".";

const meta: Meta<typeof Label> = {
  title: "Elements/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const WithText: Story = {
  args: {
    children: "Email Address",
  },
};

export const Required: Story = {
  args: {
    children: "Name",
    required: true,
  },
};

export const WithHtmlFor: Story = {
  args: {
    children: "Username",
    htmlFor: "username-input",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Label size="small">Small Label</Label>
      <Label size="medium">Medium Label</Label>
      <Label size="large">Large Label</Label>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Label color="primary">Primary Label</Label>
      <Label color="secondary">Secondary Label</Label>
      <Label color="error">Error Label</Label>
      <Label color="warning">Warning Label</Label>
      <Label color="success">Success Label</Label>
    </div>
  ),
};

export const WithCustomClass: Story = {
  args: {
    children: "Custom Styled Label",
    className: "font-bold text-lg",
  },
};
