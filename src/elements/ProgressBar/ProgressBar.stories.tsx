import type { Meta, StoryObj } from "@storybook/react-vite";
import ProgressBar from ".";

const meta: Meta<typeof ProgressBar> = {
  title: "Elements/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ProgressBar progress={30} color="primary" />
      <ProgressBar progress={50} color="secondary" />
      <ProgressBar progress={70} color="error" />
      <ProgressBar progress={90} color="warning" />
      <ProgressBar progress={100} color="success" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-sm">Small</p>
        <ProgressBar progress={40} size="small" />
      </div>
      <div>
        <p className="mb-2 text-sm">Medium</p>
        <ProgressBar progress={60} size="medium" />
      </div>
      <div>
        <p className="mb-2 text-sm">Large</p>
        <ProgressBar progress={80} size="large" />
      </div>
    </div>
  ),
};

export const ZeroProgress: Story = {
  args: {
    progress: 0,
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
  },
};

export const FullWidth: Story = {
  args: {
    progress: 75,
    fullWidth: true,
  },
};

export const CustomClass: Story = {
  args: {
    progress: 65,
    className: "h-4 bg-gray-200",
  },
};
