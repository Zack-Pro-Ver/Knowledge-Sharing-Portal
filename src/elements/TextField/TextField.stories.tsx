import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TextField from "./index";
import type { TextFieldProps } from "./TextField.types";

const meta: Meta<typeof TextField> = {
  title: "Elements/TextField",
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithValue: Story = {
  args: {
    label: "Username",
    value: "johndoe",
  },
};

export const Required: Story = {
  args: {
    label: "Password",
    required: true,
    placeholder: "Enter password",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    value: "Cannot edit this",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read Only",
    value: "Read only text",
    readOnly: true,
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    value: "invalid-email",
    error: true,
    helperText: "Please enter a valid email address",
  },
};

export const HelperText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    helperText: "Must be at least 8 characters",
  },
};

export const Multiline: Story = {
  args: {
    label: "Description",
    multiline: true,
    rows: 4,
    placeholder: "Enter description...",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextField size="small" placeholder="Small input" />
      <TextField size="medium" placeholder="Medium input" />
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextField type="text" placeholder="Text input" />
      <TextField type="email" placeholder="Email input" />
      <TextField type="password" placeholder="Password input" />
      <TextField type="number" placeholder="Number input" />
      <TextField type="tel" placeholder="Phone input" />
    </div>
  ),
};

export const WithAdornments: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextField label="Search" placeholder="Search..." startAdornment="🔍" />
      <TextField label="Website" placeholder="Enter URL" endAdornment="🔗" />
    </div>
  ),
};

export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = React.useState("");

    return (
      <TextField
        label="Controlled Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
    );
  },
};
