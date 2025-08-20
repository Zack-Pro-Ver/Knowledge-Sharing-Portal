import type { Meta, StoryObj } from "@storybook/react";
import { IconWrapper } from "./index";
import Icon from "../Icon";

const meta: Meta<typeof IconWrapper> = {
  title: "Elements/IconWrapper",
  component: IconWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bgColor: {
      control: "select",
      options: [
        "bg-blue-500",
        "bg-red-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-indigo-500",
        "bg-gray-500",
        "bg-slate-100",
        "bg-slate-200",
        "bg-slate-300",
      ],
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: "bg-blue-500",
    children: (
      <Icon size="medium" color="inherit">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </Icon>
    ),
  },
};

export const WithDifferentColors: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <IconWrapper bgColor="bg-red-500">
        <Icon size="medium" color="inherit">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </Icon>
      </IconWrapper>
      <IconWrapper bgColor="bg-green-500">
        <Icon size="medium" color="inherit">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </Icon>
      </IconWrapper>
      <IconWrapper bgColor="bg-yellow-500">
        <Icon size="medium" color="inherit">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </Icon>
      </IconWrapper>
      <IconWrapper bgColor="bg-purple-500">
        <Icon size="medium" color="inherit">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </Icon>
      </IconWrapper>
    </div>
  ),
};

export const WithDifferentSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <IconWrapper bgColor="bg-indigo-500" className="w-8 h-8">
        <Icon size="small" color="inherit">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </Icon>
      </IconWrapper>
      <IconWrapper bgColor="bg-indigo-500" className="w-10 h-10">
        <Icon size="medium" color="inherit">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </Icon>
      </IconWrapper>
      <IconWrapper bgColor="bg-indigo-500" className="w-12 h-12">
        <Icon size="medium" color="inherit">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </Icon>
      </IconWrapper>
      <IconWrapper bgColor="bg-indigo-500" className="w-16 h-16">
        <Icon size="large" color="inherit">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </Icon>
      </IconWrapper>
    </div>
  ),
};

export const WithCustomContent: Story = {
  args: {
    bgColor: "bg-pink-500",
    children: <span className="text-white font-bold text-sm">A</span>,
  },
};

export const LightBackground: Story = {
  args: {
    bgColor: "bg-slate-200",
    children: (
      <Icon size="medium" color="inherit">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </Icon>
    ),
  },
};
