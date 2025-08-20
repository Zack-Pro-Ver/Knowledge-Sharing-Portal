import type { Meta, StoryObj } from "@storybook/react";
import Image from ".";

const meta: Meta<typeof Image> = {
  title: "Elements/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/300x200",
    alt: "Placeholder image",
    width: 300,
    height: 200,
  },
};

export const WithCustomSize: Story = {
  args: {
    src: "https://via.placeholder.com/400x300",
    alt: "Custom sized image",
    width: 400,
    height: 300,
  },
  parameters: {
    layout: "centered",
  },
};

export const Rounded: Story = {
  args: {
    src: "https://via.placeholder.com/200x200",
    alt: "Rounded image",
    width: 200,
    height: 200,
    className: "rounded-lg",
  },
};

export const Responsive: Story = {
  args: {
    src: "https://via.placeholder.com/800x400",
    alt: "Responsive image",
    className: "w-full h-auto",
  },
};

export const WithFallback: Story = {
  args: {
    src: "https://invalid-url.com/image.jpg",
    alt: "Image with fallback",
    fallback: "https://via.placeholder.com/300x200?text=Fallback",
    width: 300,
    height: 200,
  },
};
