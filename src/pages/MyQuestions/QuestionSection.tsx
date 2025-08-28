import React, { useState } from "react";
import moment from "moment";
import {
  RiSearchLine,
  RiEdit2Line,
  RiDeleteBinLine,
  RiThumbUpLine,
  RiMessage2Line,
  RiEyeLine,
  RiQuestionMark,
} from "@remixicon/react";

import Chip from "../../elements/Chip";
import { Card, CardContent } from "../../elements/Card";
import Dropdown from "../../elements/Dropdown";
import Stack from "../../elements/Stack";
import Button from "../../elements/Button";
import Typography from "../../elements/Typography";
import TextField from "../../elements/TextField";

import { statusOptions, sortOptions, questions } from "./MyQuestions.constants";

function parseLastActivity(text: string): number {
  const duration = moment.duration(text);
  return Date.now() - duration.asMilliseconds();
}

const QuestionsSearchCard: React.FC = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string | number | null>("all");
  const [sort, setSort] = useState<string | number | null>("newest");

  let filteredQuestions = [...questions];

  if (search.trim()) {
    filteredQuestions = filteredQuestions.filter((q) =>
      q.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (status !== "all") {
    filteredQuestions = filteredQuestions.filter((q) => q.status === status);
  }

  filteredQuestions.sort((a, b) => {
    if (sort === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sort === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
    if (sort === "most-votes") return b.votes - a.votes;
    if (sort === "recent-activity") return parseLastActivity(b.lastActivity) - parseLastActivity(a.lastActivity);
    return 0;
  });

  return (
    <Card variant="outlined" size="large" className="p-4 pb-0 ">
      <Stack direction="row" spacing={3} wrap="wrap" className="w-full mb-4 ">
        <Stack className="relative flex-1">
        <TextField
            placeholder="Search my questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            size="medium"
            color="primary"
            startAdornment={<RiSearchLine />}
            aria-label="Search questions"
          />
        </Stack>

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
      </Stack>

      <hr className="border-t border-gray-200 -mx-4 mt-7" />

      <div className="-mx-4 ">
        {filteredQuestions.length === 0 ? (
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
        ) : (
          filteredQuestions.map((q) => (
            <div key={q.id} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0 ">
              <CardContent>
                <Stack direction="row" spacing={4} wrap="wrap" justifyContent="space-between" alignItems="flex-start">
                  {/* Left Side */}
                  <Stack direction="column" spacing={2}>
                    <Typography variant="h4" color="textPrimary">
                      {q.title}
                    </Typography>

                    <Stack direction="row" spacing={2} wrap="wrap">
                      {q.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" className="rounded-md " />
                      ))}
                    </Stack>

              <Stack direction="row" spacing={6} wrap="wrap"  className="text-gray-500 mt-3 text-sm">
                      <span className="flex items-center gap-2">
                        <RiThumbUpLine className="text-gray-400" size={14} />
                        {q.votes} votes
                      </span>
                      <span className="flex items-center gap-2">
                        <RiMessage2Line className="text-gray-400" size={14} />
                        {q.answers} answers
                      </span>
                      <span className="flex items-center gap-2">
                        <RiEyeLine className="text-gray-400" size={14} />
                        {q.views} views
                      </span>
                      <span>Asked {moment(q.date).format("MMMM D, YYYY")}</span>
                      <span>
                        Last activity: {moment().subtract(moment.duration(q.lastActivity)).fromNow()}
                      </span>
                    </Stack>
                  </Stack>

                  {/* Right Side */}
                  <Stack direction="row" spacing={0} alignItems="center">
                    <Typography
                      variant="caption"
                      component="span"
                      className={`text-xs px-2 py-1 rounded-lg font-medium ${
                        q.status === "answered"
                          ? "bg-green-200 text-green-700"
                          : q.status === "open"
                          ? "bg-blue-200 text-blue-600"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {q.status}
                    </Typography>

                    <Stack direction="row" spacing={0} alignItems="center" className="text-gray-400">
                    <Button variant="text" className="text-gray-500 hover:text-blue-600 shadow-none" disableElevation={true} aria-label={`Edit question: ${q.title}`}>
                      <RiEdit2Line size={16} />
                    </Button>
                    <Button variant="text" className="text-gray-500 hover:text-red-600 shadow-none" disableElevation={true} aria-label={`Delete question: ${q.title}`}>
                      <RiDeleteBinLine size={16} />
                    </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

export default QuestionsSearchCard;
