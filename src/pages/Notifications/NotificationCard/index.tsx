import React, { useState } from "react";
import { RiNotificationLine } from "@remixicon/react";
import { Card, CardContent } from "../../../elements/Card";
import Stack from "../../../elements/Stack";
import { notifications } from "./NotificationCard.constants";
import { IconWrapper } from "../../../elements/IconWrapper";
import Typography from "../../../elements/Typography"; 

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
        
        <Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0}
            className="border border-b-0 rounded-t-lg border-gray-300 p-6 bg-white"
          >
            
            <Stack direction="row" spacing={2}>
              <Stack className="relative w-10">
                <RiNotificationLine
                  className="absolute left-3 top-2.5 -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </Stack>
              <Typography variant="body2" color="textSecondary">
                {notifications.filter((n) => n.unread).length} unread notifications
              </Typography>
            </Stack>

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

        <Card
          variant="outlined"
          size="large"
          className="rounded-b-lg  rounded-none"
        >
          {filtered.length === 0 ? (
            <CardContent className="text-center text-gray-500 py-10">
              <Typography variant="body2" color="textSecondary">
                No notifications
              </Typography>
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

                <Stack direction="row" spacing={3}>
                  <IconWrapper bgColor={item.iconColor}>{item.icon}</IconWrapper>

                  <Stack direction="column" spacing={1}>
                    <Typography variant="h6" className="text-blue-800">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.description}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Typography
                        variant="caption"
                        className="text-blue-800 cursor-pointer"
                      >
                        View
                      </Typography>
                      <Typography variant="caption" className="cursor-pointer">
                        Mark as read
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  className="text-sm text-gray-500"
                >
                  <Typography variant="caption" color="textSecondary">
                    {item.time}
                  </Typography>
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
