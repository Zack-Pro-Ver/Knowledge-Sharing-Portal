import type { Meta, StoryObj } from "@storybook/react";
import Link from ".";

const meta: Meta<typeof Link> = {
  title: "Elements/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Link",
    href: "#",
  },
};

export const WithText: Story = {
  args: {
    children: "Visit our website",
    href: "https://example.com",
  },
};

export const External: Story = {
  args: {
    children: "External Link",
    href: "https://google.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

export const Underline: Story = {
  args: {
    children: "Underlined Link",
    href: "#",
    underline: "always",
  },
};

export const NoUnderline: Story = {
  args: {
    children: "No Underline Link",
    href: "#",
    underline: "none",
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" variant="primary">
        Primary Link
      </Link>
      <Link href="#" variant="secondary">
        Secondary Link
      </Link>
      <Link href="#" variant="error">
        Error Link
      </Link>
      <Link href="#" variant="warning">
        Warning Link
      </Link>
      <Link href="#" variant="success">
        Success Link
      </Link>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" size="small">
        Small Link
      </Link>
      <Link href="#" size="medium">
        Medium Link
      </Link>
      <Link href="#" size="large">
        Large Link
      </Link>
    </div>
  ),
};

export const CustomClass: Story = {
  args: {
    children: "Custom Styled Link",
    href: "#",
    className: "text-purple-600 hover:text-purple-800 font-bold",
  },
};
