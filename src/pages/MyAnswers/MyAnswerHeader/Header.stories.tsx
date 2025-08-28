import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../../../components/Header";

import { RiSearchLine } from "@remixicon/react";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  args: {
    title: "My Answers",
    description: "Track your contributions and impact",
    buttonText: "Find Question",
    showButton: true,
    icon: <RiSearchLine className="absolute left-4 text-white w-5 h-5" />,
  },
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
