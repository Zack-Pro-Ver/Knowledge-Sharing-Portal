import type { Meta, StoryObj } from "@storybook/react-vite";
import BadgesMainCards from "./index";

const meta: Meta<typeof BadgesMainCards> = {
  title: "Pages/Badges/BadgesMainCards",
  component: BadgesMainCards,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

