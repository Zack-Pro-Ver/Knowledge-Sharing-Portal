import React, { useState } from "react";
import { RiNotificationLine } from "@remixicon/react";
import { Card, CardContent } from "../../../elements/Card";
import Stack from "../../../elements/Stack";
import { notifications } from "./NotificationCard.constants";
import { IconWrapper } from "../../../elements/IconWrapper"; 

const filterOptions = ["All", "Unread", "Answers", "Badges", "Votes"];

export const NotificationCard: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = notifications.filter((n) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Unread") return n.unread;
    return n.type === activeFilter;
  });

  return (
    <Stack direction="column">

      <Stack className="p-4  !gap-0">
        {/* Filter Bar */}
        <Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0}
            className="border border-b-0 rounded-t-lg border-gray-300 p-6 bg-white"
          >
            {/* Left side */}
            <Stack direction="row" spacing={2}>
              <Stack className="relative w-10">
                <RiNotificationLine
                  className="absolute left-3 top-2.5 -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </Stack>
              <span className="font-normal text-sm text-gray-600">
                {notifications.filter((n) => n.unread).length} unread notifications
              </span>
            </Stack>

            {/* Right side (filters) */}
            <Stack direction="row" spacing={2} className="pl-4">
              {filterOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveFilter(item)}
                  className={`px-3 py-1 text-xs rounded-full transition ${
                    activeFilter === item
                      ? "bg-blue-100 text-black"
                      : "bg-gray-100 hover:bg-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </Stack>
          </Stack>
        </Stack>

        {/* Notifications Card */}
        <Card
          variant="outlined"
          size="large"
          className="rounded-b-lg  rounded-none"
        >
          {filtered.length === 0 ? (
            <CardContent className="text-center text-gray-500 py-10">
              No notifications
            </CardContent>
          ) : (
            filtered.map((item, idx) => (
              <Stack
                key={item.id}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                className={`p-4 ${
                  item.unread ? "bg-blue-50" : "bg-white"
                } hover:bg-gray-50 ${
                  idx !== filtered.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                {/* Left part */}
                <Stack direction="row" spacing={3}>
                  <IconWrapper bgColor={item.iconColor}>
                    {item.icon}
                  </IconWrapper>

                  <Stack direction="column" spacing={1}>
                    <h3 className="font-medium text-sm text-blue-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <Stack direction="row" spacing={2}>
                      <p className="text-xs text-blue-800">View</p>
                      <p className="text-xs">Mark as read</p>
                    </Stack>
                  </Stack>
                </Stack>

                {/* Right part */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  className="text-sm text-gray-500"
                >
                  {item.time}
                  {item.unread && (
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                  )}
                </Stack>
              </Stack>
            ))
          )}
        </Card>
      </Stack>
    </Stack>
  );
};

export default NotificationCard;
