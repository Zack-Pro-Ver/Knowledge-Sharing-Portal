import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Elements/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Contained Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
  },
};

export const ColorsAndSizesAndIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button color="primary" size="small" startIcon="🚀">
        Primary
      </Button>
      <Button color="secondary" size="medium" endIcon="➡️">
        Secondary
      </Button>
      <Button color="error" size="large">
        Error
      </Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
};

export const Interactive: Story = {
  args: {
    variant: "contained",
  },

  render: function Render() {
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };

    return (
      <Button loading={loading} onClick={handleClick}>
        Click to Load
      </Button>
    );
  },
};
