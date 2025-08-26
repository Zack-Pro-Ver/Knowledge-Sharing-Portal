import React, { useState } from "react";
import {
  RiAtLine,
  RiChat1Line,
  RiCheckDoubleLine,
  RiFileChartLine,
  RiMedalLine,
  RiMessageLine,
  RiNotificationLine,
  RiThumbUpLine,
  RiUserAddLine
  } from "@remixicon/react";

import { Card, CardContent } from "../../elements/Card";
import { Avatar } from "../../elements";
import { Header } from "../../components/Header";


const notifications = [
  {
    id: 1,
    type: "Answers",
    icon: <RiChat1Line size={20} />,
    iconColor: "!bg-blue-100 !text-blue-600",
    title: "Your question received a new answer",
    description:
      'Someone answered your question "How to implement authentication in Next.js?"',
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "Answers",
    icon: <RiCheckDoubleLine size={20} />,
    iconColor: "bg-green-100 text-green-600",
    title: "Your answer was accepted",
    description:
      'Your answer to "React performance optimization" was marked as the best answer',
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "Badges",
    icon: <RiMedalLine size={20} />,
    iconColor: "bg-purple-100 text-purple-600",
    title: "New badge earned",
    description: 'Congratulations! You earned the "Helpful Contributor" badge',
    time: "3 hours ago",
    unread: true,
  },
  {
    id: 4,
    type: "Votes",
    icon: <RiThumbUpLine size={20} />,
    iconColor: "bg-yellow-100 text-yellow-600",
    title: "Your answer received upvotes",
    description: "5 people found your answer helpful",
    time: "5 hours ago",
    unread: false,
  },
  {
    id: 5,
    type: "Answers",
    icon: <RiMessageLine size={20} />,
    iconColor: "bg-orange-100 text-orange-600",
    title: "Someone commented on your answer",
    description: 'New comment on your answer about "JavaScript async patterns"',
    time: "1 day ago",
    unread: false,
  },
  {
    id: 6,
    type: "Followers",
    icon: <RiUserAddLine size={20} />,
    iconColor: "bg-pink-100 text-pink-600",
    title: "Someone started following you",
    description: "Sarah Johnson is now following your activity",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 7,
    type: "Followers",
    icon: <RiAtLine size={20} />,
    iconColor: "!bg-blue-100 !text-blue-600",
    title: "You were mentioned in a comment",
    description: 'You were mentioned in a discussion about "Database design patterns"',
    time: "3 days ago",
    unread: false,
  },
  {
    id: 8,
    type: "Followers",
    icon: <RiFileChartLine size={19} />,
    iconColor: "bg-gray-100 text-gray-600",
    title: "You were mentioned in a comment",
    description: 'You were mentioned in a discussion about "Database design patterns"',
    time: "1 week ago",
    unread: false,
  },
];

const filterOptions = ["All", "Unread", "Answers", "Badges", "Votes"];

export const Notification: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = notifications.filter((n) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Unread") return n.unread;
    return n.type === activeFilter;
  });

  return (
    
    <div >
      <div className="p-1">
        <Header
        buttonText=" Mark All as Read "
        description=" Stay updated with your Q&A activity"
        title="Notification"
        showButton={true}
        icon={<RiCheckDoubleLine className="absolute left-4 item-center text-white w-5 h-5"/>}
      />
      </div>
      {/* Filter Bar */}
      <div className="p-4 pt-1">
       <div className="flex  border border-b-0 rounded-t-lg border-gray-300 place-items-center  p-6 gap-3 bg-white">
        <div className="flex flex-row gap-0">
          <div>
              <div className="relative w-10">
    <RiNotificationLine className="absolute left-3 top-2.5 -translate-y-1/2 text-gray-400" size={18} />
        </div>
          </div>
            <span className="font-normal text-sm text-gray-600">
          {notifications.filter((n) => n.unread).length} unread notifications
        </span>
        </div>
        
        <div className="flex gap-2">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1 text-xs  rounded-full transition ${
                activeFilter === f
                  ? "bg-blue-100 text-black"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications Card */}
      <Card variant="outlined" size="large" className="p-0 rounded-b-lg rounded-none">
        {filtered.length === 0 ? (
          <CardContent className="text-center text-gray-500 py-10">
            No notifications
          </CardContent>
        ) : (
          filtered.map((n, idx) => (
            <div
              key={n.id}
              className={`flex justify-between items-start p-4 ${
                n.unread ? "bg-blue-50" : "bg-white"
              } hover:bg-gray-50 ${
                idx !== filtered.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="flex gap-6">
                <Avatar
                  size="medium"
                  variant="circular"
                  className={n.iconColor}
                >
                  <div className="mt-1">{n.icon}</div>
                </Avatar>

                <div className="space-y-1">
                  <h3 className="font-medium text-sm text-blue-800">
                    {n.title}
                  </h3>
                  <p className=" text-gray-600 text-sm">{n.description}</p>
                  <div className="flex flex-row gap-2">
                    <p className="text-xs text-blue-800">View</p>
                    <p className="text-xs">Mark as read</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {n.time}
                {n.unread && (
                  <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                )}
              </div>
            </div>
          ))
        )}
      </Card>
    </div>
    </div>
  );
};

export default Notification;
