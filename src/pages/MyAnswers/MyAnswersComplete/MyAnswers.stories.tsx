import type { Meta, StoryObj } from "@storybook/react";
import { MyAnswers } from "."; // import the full component

const meta: Meta<typeof MyAnswers> = {
  title: "Components/MyAnswers",
  component: MyAnswers,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MyAnswers>;


export const Default: Story = {
  args: {},
};

export const Accepted: Story = {
  args: {
    initialStatusFilter: "accepted" as const,
  },
};


export const Answered: Story = {
  args: {
    initialStatusFilter: "answered" as const,
  },
};


export const WithLongDescription: Story = {
  args: {
    initialSearch: "CSS Grid vs Flexbox",
  },
};


export const MultipleAnswers: Story = {
  args: {
    initialSortBy: "most votes" as const,
  },
};


export const EmptyState: Story = {
  args: {
    initialSearch: "no matched results",
  },
};


export const SortedByOldest: Story = {
  args: {
    initialSortBy: "oldest" as const,
  },
};


export const SortedByRecentActivity: Story = {
  args: {
    initialSortBy: "recent activity" as const,
  },
};
