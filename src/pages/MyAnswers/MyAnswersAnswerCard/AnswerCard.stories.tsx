import type { Meta, StoryObj } from "@storybook/react";
import { AnswerCard } from "./index";   
import { answers } from "./MyAnswers.constants";

const meta: Meta<typeof AnswerCard> = {
  title: "Components/AnswerCard",
  component: AnswerCard,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof AnswerCard>;


export const Default: Story = {
  args: {
    answer: answers[0],
    index: 0,
  },
};

export const AllAnswers: Story = {
  render: () => (
    <div className="flex flex-col w-full max-w-3xl gap-4">
      {answers.map((answer, index) => (
        <AnswerCard key={answer.id} answer={answer} index={index} />
      ))}
    </div>
  ),
};
