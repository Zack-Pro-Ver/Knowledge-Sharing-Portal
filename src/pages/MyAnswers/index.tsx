import Card, { CardHeader } from "../../elements/Card";
import {
  RiChat1Line,
  RiCheckDoubleLine,
  RiStarLine,
  RiThumbUpLine,
  RiSearchLine
} from "@remixicon/react";
import { Header } from "../../components/Header";

export const MyAnswers = () => {
  const stats = [
    {
      id: 1,
      title: "28",
      subheader: "Total Answers",
      icon: <RiChat1Line className="w-5 h-5" />,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      id: 2,
      title: "12",
      subheader: "Accepted",
      icon: <RiCheckDoubleLine className="w-5 h-5 text-green-600" />,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      id: 3,
      title: "156",
      subheader: "Total Votes",
      icon: <RiThumbUpLine className="w-5 h-5 text-purple-600" />,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
    {
      id: 4,
      title: "5.6",
      subheader: "Avg Rating",
      icon: <RiStarLine className="w-4 h-4 text-yellow-600" />,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },
  ];

  const filters = [
    {
      id: "status",
      options: [
        { value: "All Status", label: "Newest" },
        { value: "accepted", label: "Accepted" },
        { value: "answered", label: "Answered" },
        { value: "pending", label: "Pending" },
      ],
    },
    {
      id: "sort",
      options: [
        { value: "oldest", label: "Oldest" },
        { value: "most votes", label: "Most Votes" },
        { value: "recent activity", label: "Recent Activity" },
      ],
    },
  ];

  const answers = [
    {
      id: 1,
      title: "How to optimize React performance?",
      tags: ["react", "performance", "hooks"],
      description:
        "React performance can be optimized using memoization, virtualization, code splitting, and avoiding unnecessary re-renders.",
      status: "accepted",
      answeredAt: "2 days ago",
      lastActivity: "5 hours ago",
      actions: ["View", "Edit"],
    },
    {
      id: 2,
      title: "Difference between useState and useRef?",
      tags: ["react", "hooks"],
      description:
        "`useState` triggers re-renders on update while `useRef` stores mutable values without re-rendering.",
      status: "answered",
      answeredAt: "1 week ago",
      lastActivity: "2 days ago",
      actions: ["View", "Edit"],
    },
    {
      id: 3,
      title: "Database design patterns for scalability?",
      tags: ["database", "design", "scalability"],
      description:
        "For scalable database design, consider implementing these patterns: 1. Database sharding, 2. Read replicas, 3. Caching strategies",
      status: "answered",
      answeredAt: "2 days ago",
      lastActivity: "5 hours ago",
      actions: ["View", "Edit"],
    },
    {
      id: 4,
      title: "Node.js security best practices?",
      tags: ["nodejs", "security", "backend"],
      description:
        "Security in Node.js applications requires attention to multiple areas: authentication, authorization, input validation, and secure headers...",
      status: "accepted",
      answeredAt: "3 days ago",
      lastActivity: "2 hours ago",
      actions: ["View", "Edit"],
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox: When to use which?",
      tags: ["css", "layout", "frontend"],
      description:
        "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Grid is for 2D layouts, while Flexbox is for 1D layouts",
      status: "answered",
      answeredAt: "2 days ago",
      lastActivity: "5 hours ago",
      actions: ["View", "Edit"],
    },
  ];

  return (
    <>
      {/* 🔹 Header Section */}
   
<div className="px-2">
  <Header
    buttonText="Find Question"
    description="Track your contributions and impact"
    icon={<RiSearchLine className="absolute left-4 item-center text-white w-5 h-5" />}
    title="My Answers"
  />
</div>


      <div className="p-4">
        {/* 🔹 Top Stats Row */}
        <div className="flex justify-center gap-6 mb-6">
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
                    {stat.icon}
                  </div>
                }
                title={<span className="text-lg font-semibold">{stat.title}</span>}
                subheader={
                  <span className="text-sm text-gray-600">{stat.subheader}</span>
                }
              />
            </Card>
          ))}
        </div>

        {/* 🔹 Search Bar */}
        <Card
          variant="outlined"
          size="small"
          elevation={1}
          className="p-6 border-gray-200 rounded-b-none"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <RiSearchLine className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search answers..."
                className="w-full p-2 rounded-md pl-10 text-black border border-gray-300 focus:ring-1 outline-offset-2"
              />
            </div>

            {filters.map((filter) => (
              <select
                key={filter.id}
                className="px-3 py-2 border rounded-md focus:ring-1 border-gray-300 outline-offset-2"
              >
                {filter.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </Card>

        {/* 🔹 Answers List */}
        <div>
          {answers?.map((answer, index) => {
            const avatarIcons = [
              <RiCheckDoubleLine className="w-4 h-4 text-green-600" />,
              <RiChat1Line className="w-4 h-4 text-blue-600" />,
              <RiChat1Line className="w-4 h-4 text-blue-600" />,
              <RiCheckDoubleLine className="w-4 h-4 text-green-600" />,
              <RiChat1Line className="w-4 h-4 text-blue-600" />,
            ];
            const icon = avatarIcons[index % avatarIcons.length];

            return (
              <Card
                key={answer.id}
                variant="outlined"
                size="small"
                elevation={1}
                className="p-4 rounded-none border-t-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex gap-4">
                  {/* Avatar + ThumbsUp */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      {icon}
                    </div>
                    <RiThumbUpLine className="w-3 h-3 " />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col space-y-4">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-semibold text-gray-800 hover:underline cursor-pointer">
                        {answer.title}
                      </h2>
                      {answer.status && (
                        <span
                          className={`px-2 py-0.5 text-xs rounded-full ${
                            answer.status === "accepted"
                              ? "bg-green-100 text-green-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {answer.status}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {answer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-gray-100 rounded-md text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-gray-600">{answer.description}</p>

                    <div className="flex justify-between text-xs text-gray-500 pt-1">
                      <p>
                        Answered {answer.answeredAt} • Last activity:{" "}
                        {answer.lastActivity}
                      </p>
                      <div className="flex gap-4">
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
                          </div>

                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
