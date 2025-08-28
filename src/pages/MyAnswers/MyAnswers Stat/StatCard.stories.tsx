import type { Meta, StoryObj } from "@storybook/react-vite";
import Card, { CardHeader } from "../../../elements/Card";
import { stats } from "./MyAnswers.constants";

const meta: Meta<typeof Card> = {
  title: "Components/StatCard",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStats: Story = {
  render: () => (
    <div className="flex gap-6 flex-wrap">
      {stats.map((stat) => (
        <Card
          key={stat.id}
          variant="outlined"
          size="small"
          elevation={2}
          className="w-80 hover:bg-gray-50 transition-colors"
        >
          <CardHeader
            avatar={
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${stat.bg} ${stat.color}`}
              >
                <stat.icon />
              </div>
            }
            title={<span className="text-lg font-semibold">{stat.title}</span>}
            subheader={<span className="text-sm text-gray-600">{stat.subheader}</span>}
          />
        </Card>
      ))}
    </div>
  ),
};
