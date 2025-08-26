import React, { useState } from "react";
import moment from "moment";
import {
  RiSearchLine,
  RiEdit2Line,
  RiDeleteBinLine,
  RiThumbUpLine,
  RiMessage2Line,
  RiEyeLine,
  RiQuestionMark
} from "@remixicon/react";
import Chip from "../../elements/Chip";
import { Card, CardContent } from "../../elements/Card";
import Dropdown from "../../elements/Dropdown";
import Stack from "../../elements/Stack"; 
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
        <div className="relative flex-1">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search my questions..."
            aria-label="Search questions"
            className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

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

      {/* Render Questions */}
      <div className="-mx-4 ">
        {filteredQuestions.length === 0 ? (
          <Stack direction="column" alignItems="center" justifyContent="center" spacing={4} className="py-10 text-center text-gray-500">
            <div className="w-12 h-12 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <RiQuestionMark className="text-2xl text-gray-500" />
            </div>
            <p className="font-semibold text-gray-900">No questions found</p>
            <p className="text-sm mt-1">Try adjusting your search or filter criteria</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Ask Your First Question
            </button>
          </Stack>
        ) : (
          filteredQuestions.map((q) => (
            <div key={q.id} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0 ">
              <CardContent>
                <Stack direction="row" spacing={4} wrap="wrap" justifyContent="space-between" alignItems="flex-start">
                  {/* Left Side */}
                  <Stack direction="column" spacing={2}>
                    <h2 className="text-2xl font-regular text-gray-900">{q.title}</h2>

                    <Stack direction="row" spacing={2} wrap="wrap">
                      {q.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" className="rounded-md" />
                      ))}
                    </Stack>

                    <Stack direction="row" spacing={6} wrap="wrap"  className="text-gray-500 mt-2 text-sm">
                      <span className="flex items-center gap-1">
                        <RiThumbUpLine className="text-gray-400" size={14} />
                        {q.votes} votes
                      </span>
                      <span className="flex items-center gap-1">
                        <RiMessage2Line className="text-gray-400" size={14} />
                        {q.answers} answers
                      </span>
                      <span className="flex items-center gap-1">
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
                  <Stack direction="row" spacing={5} alignItems="center">
                    <span
                      className={`text-xs px-2 py-1 rounded-lg font-medium ${
                        q.status === "answered"
                          ? "bg-green-100 text-green-600"
                          : q.status === "open"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {q.status}
                    </span>
                    <Stack direction="row" spacing={2} alignItems="center" className="text-gray-400">
                      <button className="hover:text-blue-600 cursor-pointer">
                        <RiEdit2Line size={16} />
                      </button>
                      <button className="hover:text-red-600 cursor-pointer">
                        <RiDeleteBinLine size={16} />
                      </button>
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
