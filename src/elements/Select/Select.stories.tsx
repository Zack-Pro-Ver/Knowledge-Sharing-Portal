import type { Meta, StoryObj } from "@storybook/react";
import Select from "./index";
import { RiArrowDownSLine, RiUserLine, RiMailLine } from "@remixicon/react";

const meta: Meta<typeof Select> = {
  title: "Elements/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled", "standard"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success", "inherit"],
    },
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4", disabled: true },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    label: "Select an option",
    placeholder: "Choose an option...",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    options: sampleOptions,
    label: "Outlined Select",
    placeholder: "Choose...",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    options: sampleOptions,
    label: "Filled Select",
    placeholder: "Choose...",
  },
};

export const Standard: Story = {
  args: {
    variant: "standard",
    options: sampleOptions,
    label: "Standard Select",
    placeholder: "Choose...",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    options: sampleOptions,
    label: "Small Select",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    options: sampleOptions,
    label: "Large Select",
  },
};

export const Error: Story = {
  args: {
    error: true,
    helperText: "This field is required",
    options: sampleOptions,
    label: "Select with error",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: sampleOptions,
    label: "Disabled Select",
  },
};

export const WithIcon: Story = {
  args: {
    options: sampleOptions,
    label: "Select with icon",
    startIcon: <RiUserLine />,
    endIcon: <RiArrowDownSLine />,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    options: sampleOptions,
    label: "Full Width Select",
  },
};

export const Required: Story = {
  args: {
    required: true,
    options: sampleOptions,
    label: "Required Select",
  },
};
