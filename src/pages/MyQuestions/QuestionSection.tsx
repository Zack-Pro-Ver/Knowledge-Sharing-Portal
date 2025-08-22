import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
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

const QuestionsSearchCard: React.FC = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string | number | null>("all");
  const [sort, setSort] = useState<string | number | null>("newest");

  return (
    <Card variant="outlined" size="large" className="p-4">
      <div className="flex gap-3 w-full mb-4">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
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
          fullWidth={false}
          className="min-w-[110px] "

        />

        <Dropdown
          options={sortOptions}
          value={sort}
          onChange={(val) => setSort(val)}
          placeholder="Sort By"
          variant="outlined"
          size="medium"
          color="secondary"
          fullWidth={false}
          className="min-w-[140px]"
        />
      </div>

      <div className="divide-y divide-gray-200">
        <CardContent>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-gray-900">
              Question Title
            </h3>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 text-xs bg-gray-100 rounded-md">
                tag
              </span>
              <span className="px-2 py-1 text-xs bg-gray-100 rounded-md">
                tag
              </span>
            </div>
            <div className="flex text-sm text-gray-500 gap-4">
              <span>0 votes</span>
              <span>0 answers</span>
              <span>0 views</span>
              <span>Asked just now</span>
            </div>
            <h3 className="text-base font-semibold text-gray-900">
              Question Title
            </h3>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 text-xs bg-gray-100 rounded-md">
                tag
              </span>
              <span className="px-2 py-1 text-xs bg-gray-100 rounded-md">
                tag
              </span>
            </div>
            <div className="flex text-sm text-gray-500 gap-4">
              <span>0 votes</span>
              <span>0 answers</span>
              <span>0 views</span>
              <span>Asked just now</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default QuestionsSearchCard;
