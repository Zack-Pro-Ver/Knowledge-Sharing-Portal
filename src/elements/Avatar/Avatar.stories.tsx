import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from ".";

const meta: Meta<typeof Avatar> = {
  title: "Elements/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "A",
  },
};
export const Image: Story = {
  args: {
    src: "https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg",
    alt: "User Avatar",
  },
};
export const Letter: Story = {
  args: {
    children: "JD",
  },
};
export const SizesAndVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="small"
        variant="circular"
        backgroundColor="#3b82f6"
        textColor="white"
      >
        S
      </Avatar>
      <Avatar size="medium" variant="rounded">
        M
      </Avatar>
      <Avatar size="large" variant="square">
        L
      </Avatar>
    </div>
  ),
};
export const Clickable: Story = {
  args: {
    children: "C",
    onClick: () => alert("Avatar clicked!"),
  },
};
