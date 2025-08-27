import { useState } from "react";
import moment from "moment";
import Card, { CardHeader } from "../../elements/Card";
import {
  RiChat1Line,
  RiCheckDoubleLine,
  RiThumbUpLine,
  RiSearchLine,
} from "@remixicon/react";

import { Header } from "../../components/Header";
import Stack from "../../elements/Stack"; 
import { stats, answers, filters } from "./MyAnswers.constants";
import type { Answer } from "./MyAnswers.constants";

export const MyAnswers = () => {
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "accepted" | "answered" | "pending"
  >("all");
  const [sortBy, setSortBy] = useState<
    "newest" | "oldest" | "most votes" | "recent activity"
  >("newest");

  const filteredAnswers: Answer[] = answers
    .filter(
      (a) =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.description.toLowerCase().includes(search.toLowerCase()) ||
        a.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    )
    .filter((a) =>
      statusFilter === "all" ? true : a.status === statusFilter
    )
    .sort((a, b) => {
      if (sortBy === "newest") return b.createdAt.getTime() - a.createdAt.getTime();
      if (sortBy === "oldest") return a.createdAt.getTime() - b.createdAt.getTime();
      if (sortBy === "most votes") return b.votes - a.votes;
      if (sortBy === "recent activity")
        return b.lastActivity.getTime() - a.lastActivity.getTime();
      return 0;
    });

  return (
    <>
      <div className="px-2">
        <Header
          buttonText="Find Question"
          description="Track your contributions and impact"
          showButton={true}
          icon={<RiSearchLine className="absolute left-4 item-center text-white w-5 h-5" />}
          title="My Answers"
        />
      </div>
      <div className="p-4">

        {/* Stats top cards */}
        <Stack direction="row" spacing={6} justifyContent="flex-start" className="mb-6">
          {stats?.map((stat) => (
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
                    {stat.icon && <stat.icon />}
                  </div>
                }
                title={<span className="text-lg font-semibold">{stat.title}</span>}
                subheader={<span className="text-sm text-gray-600">{stat.subheader}</span>}
              />
            </Card>
          ))}
        </Stack>

        <Card
          variant="outlined"
          size="medium"
          elevation={1}
          className="p-6 text-lg border-gray-200 rounded-t-md rounded-b-none"
        >
          <Stack direction="row" spacing={4} alignItems="center" className="flex-col md:flex-row">
            <div className="relative flex-1 w-full">
              <RiSearchLine className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search answers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 rounded-md pl-10 text-black border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
              className="px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 border-gray-300 outline-offset-2"
            >
              {filters[0].options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-offset-2"
            >
              {filters[1].options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Stack>
        </Card>

        <div className="border border-gray-200 border-t-0 rounded-b-md overflow-hidden">
          {filteredAnswers.map((answer, index) => {
            const avatarIcons = [
              <RiCheckDoubleLine className="w-4 h-4 text-green-600" />,
              <RiChat1Line className="w-4 h-4 text-blue-600" />,
            ];
            const icon = avatarIcons[index % avatarIcons.length];

            return (
              <Card
                key={answer.id}
                variant="outlined"
                size="small"
                elevation={0}
                className={`p-4 border-t hover:bg-gray-50 transition-colors rounded-none ${
                  index === filteredAnswers.length - 1 ? "rounded-b-md" : ""
                }`}
              >
                <Stack direction="row" spacing={4}>
                  {/* Avatar */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      {icon}
                    </div>
                    <RiThumbUpLine className="w-3 h-3 " />
                  </div>

                  {/* Content */}
                  <Stack direction="column" spacing={4} className="flex-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-semibold text-gray-800 cursor-pointer">
                        {answer.title}
                      </h2>
                      {answer.status && (
                        <span
                          className={`px-2 py-0.5 text-sm rounded-full ${
                            answer.status === "accepted"
                              ? "bg-green-100 text-green-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {answer.status}
                        </span>
                      )}
                    </div>

                    <Stack direction="row" spacing={2} className="flex-wrap">
                      {answer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-md bg-gray-100 rounded-md text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </Stack>

                    <p className="text-md text-gray-600">{answer.description}</p>

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      className="text-md text-gray-500 pt-1"
                    >
                      <div className="flex gap-8"> 
                        <span>Answered {moment(answer.answeredAt).fromNow()}</span>
                        <span>Last activity: {moment(answer.lastActivity).fromNow()}</span>
                      </div>
                      <Stack direction="row" spacing={4}>
                        {answer.actions.map((action) => (
                          <button
                            key={action}
                            className={`hover:underline ${
                              action === "Edit" ? "text-black" : "text-blue-600"
                            }`}
                          >
                            {action}
                          </button>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
