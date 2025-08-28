import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badges } from "./index";

const meta: Meta<typeof Badges> = {
  title: "Pages/Badges",
  component: Badges,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

