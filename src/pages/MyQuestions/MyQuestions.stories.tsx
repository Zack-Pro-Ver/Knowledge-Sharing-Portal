import type { Meta, StoryObj } from "@storybook/react-vite";
import  { useState } from "react"; 
import { Stack, Typography, Button, TextField, Dropdown } from "../../elements";
import { RiSearchLine, RiQuestionMark } from "@remixicon/react";
import { statusOptions, sortOptions } from "../../pages/MyQuestions/MyQuestions.constants";
import QuestionsSearchCard from "../MyQuestions/QuestionSection";

const meta: Meta<typeof QuestionsSearchCard> = {
  title: "Pages/MyQuestions",
  component: QuestionsSearchCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="bg-gray-50 p-4" style={{ width: "1000px", maxWidth: "100%" }}>
        {/* Header Section */}
        <div className="mb-8">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h3" fontWeight="semibold" color="textPrimary">
              My Questions
            </Typography>
            <Button variant="contained" color="primary" size="medium">
              Ask Question
            </Button>
          </Stack>
        </div>

        <QuestionsSearchCard />
      </div>
    );
  },
};


export const EmptyState: Story = {
  render: () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<string | number | null>("all");
    const [sort, setSort] = useState<string | number | null>("newest");

    return (
      
      <div className="bg-gray-50 p-4" style={{ width: "1000px", maxWidth: "100%" }}>
        <div className="mb-8">
          <Stack direction="column" spacing={4}>
            <Stack direction="row" spacing={4} wrap="wrap" justifyContent="space-between">
              <TextField
                placeholder="Search my questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                variant="outlined"
                size="medium"
                color="primary"
                startAdornment={<RiSearchLine />}
                aria-label="Search questions"
                className="flex-1"
              />

              <Dropdown
                options={sortOptions}
                value={sort}
                onChange={(val) => setSort(val)}
                placeholder="Sort By"
                variant="outlined"
                size="medium"
                color="secondary"
                className="min-w-[140px] bg-gray-50 w-full md:w-auto"
              />

              <Dropdown
                options={statusOptions}
                value={status}
                onChange={(val) => setStatus(val)}
                placeholder="All Status"
                variant="outlined"
                size="medium"
                color="secondary"
                className="min-w-[110px] bg-gray-50 w-full md:w-auto"
              />
            </Stack>
          </Stack>
        </div>

        {/* Empty State Section */}
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          className="py-10 text-center text-gray-500"
        >
          <div className="w-12 h-12 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <RiQuestionMark className="text-2xl text-gray-500" />
          </div>

          <Typography variant="body2" fontWeight="semibold" color="textPrimary">
            No questions found
          </Typography>

          <Typography variant="body2" color="textSecondary">
            Try adjusting your search or filter criteria
          </Typography>

          <Button variant="contained" color="primary" size="medium">
            Ask Your First Question
          </Button>
        </Stack>
      </div>
    );
  },
};
