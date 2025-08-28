import type { Meta, StoryObj } from "@storybook/react-vite";
import { BadgesHeader } from "./index";

const meta: Meta<typeof BadgesHeader> = {
  title: "Pages/Badges/BadgesHeader",
  component: BadgesHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
