import type { Meta, StoryObj } from "@storybook/react-vite";
import BadgesCards from "./index";

const meta: Meta<typeof BadgesCards> = {
    title: "Pages/Badges/BadgesCards",
    component: BadgesCards,
    parameters: {
        layout: "padded",
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};