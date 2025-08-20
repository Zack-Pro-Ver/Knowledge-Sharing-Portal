import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";

const meta: Meta<typeof Card> = {
  title: "Elements/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is a simple card component.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-gray-600">This card has an outlined variant.</p>
      </div>
    ),
  },
};

export const Elevation: Story = {
  args: {
    variant: "elevation",
    elevation: 8,
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">This card has an elevated variant.</p>
      </div>
    ),
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Raised Card</h3>
        <p className="text-gray-600">
          This card has a raised effect (hover effect kind).
        </p>
      </div>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Card size="small">
        <div className="p-3">
          <h3 className="text-sm font-semibold">Small Card</h3>
        </div>
      </Card>
      <Card size="medium">
        <div className="p-4">
          <h3 className="text-base font-semibold">Medium Card</h3>
        </div>
      </Card>
      <Card size="large">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Large Card</h3>
        </div>
      </Card>
    </div>
  ),
};
