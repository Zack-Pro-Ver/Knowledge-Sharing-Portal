import React, { useState } from "react";
import {
  RiSearchLine,
  RiEdit2Line,
  RiDeleteBinLine,
  RiThumbUpLine,
  RiMessage2Line,
  RiEyeLine,
} from "@remixicon/react";
import Chip from "../../elements/Chip";
import { Card, CardContent } from "../../elements/Card";
import Dropdown from "../../elements/Dropdown";
import type { DropdownOption } from "../../elements/Dropdown/Dropdown.types";

const statusOptions: DropdownOption[] = [
  { label: "All", value: "all" },
  { label: "Answered", value: "answered" },
  { label: "Open", value: "open" },
  { label: "Closed", value: "closed" },
];

const sortOptions: DropdownOption[] = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Recent Activity", value: "recent-activity" },
  { label: "Most Votes", value: "most-votes" },
];

const questions = [
  {
    id: 1,
    title: "How to implement authentication in Next.js with NextAuth?",
    tags: ["nextjs", "authentication"],
    votes: 12,
    answers: 3,
    views: 234,
    date: "2024-01-15",
    status: "answered",
    lastActivity:"2 hours ago"
  },
  {
    id: 2,
    title: "What is the best way to optimize performance in React applications?",
    tags: ["react", "performance", "optimization"],
    votes: 8,
    answers: 5,
    views: 120,
    date: "2024-01-20",
    status: "open",
    lastActivity:"2 days ago"

  },
  {
    id: 3,
    title: "How do I manage state globally in React?",
    tags: ["react", "state-management"],
    votes: 20,
    answers: 6,
    views: 450,
    date: "2024-01-10",
    status: "closed",
    lastActivity:"2 weeks ago "

  },
];

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
    if (sort === "recent-activity") return b.answers - a.answers;
    return 0;
  });

  return (
    <Card variant="outlined" size="large" className="p-4">
      <div className="flex gap-3 w-full mb-4">
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
          className="min-w-[110px] bg-gray-50"
        />

        <Dropdown
          options={sortOptions}
          value={sort}
          onChange={(val) => setSort(val)}
          placeholder="Sort By"
          variant="outlined"
          size="medium"
          color="secondary"
          className="min-w-[140px] bg-gray-50"
        />
      </div>
      <hr className="border-t border-gray-200 -mx-4 mt-7" />


      {/* Render Questions */}
      <div className=" -mx-4 ">
        {filteredQuestions.map((q) => (
          <div key={q.id} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0 ">
            <CardContent>
              <div className="flex justify-between items-start">
                {/* Left Side */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-regular text-gray-900">
                    {q.title}
                  </h2>

                  <div className="flex gap-2 flex-wrap">
                    {q.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        className="rounded-md"
                      />
                    ))}
                  </div>

                  <div className="flex text-sm text-gray-500 gap-6 items-center mt-1">
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
                      views
                    </span>
                    <span>Asked {q.date}</span>
                    <span>Last activity: {q.lastActivity}</span>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-5">
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
                  <div className="flex gap-2 text-gray-400">
                    <button className="hover:text-blue-600 cursor-pointer">
                        <RiEdit2Line size={16} /> 
                    </button>
                    <button className="hover:text-red-600 cursor-pointer">  
                        <RiDeleteBinLine size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default QuestionsSearchCard;
