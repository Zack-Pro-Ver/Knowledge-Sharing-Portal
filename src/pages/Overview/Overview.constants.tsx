import {
  RiQuestionLine,
  RiChat3Line,
  RiMedalLine,
  RiStarLine,
} from "@remixicon/react";
import { Children } from "react";

export const UserStats = [
  {
    title: "Question",
    totalCount: 8,
    icon: RiQuestionLine,
    currentWeekCount: 100,
    bgColor: "bg-blue-100",
    iconColor: "rgb(37 99 235/var(--tw-text-opacity,1))",
  },
  {
    title: "Chat",
    totalCount: 7,
    icon: RiChat3Line,
    currentWeekCount: 50,
    bgColor: "bg-green-100",
    iconColor: "rgb(22 163 74 / var(--tw-text-opacity, 1))",
  },
  {
    title: "Medal",
    totalCount: 6,
    icon: RiMedalLine,
    currentWeekCount: 20,
    bgColor: "bg-purple-100",
    iconColor: "rgb(147 51 234/var(--tw-text-opacity,1))",
  },
  {
    title: "Star",
    totalCount: 4,
    icon: RiStarLine,
    currentWeekCount: 10,
    bgColor: "bg-orange-100",
    iconColor: "rgb(202 138 4/var(--tw-text-opacity,1))",
  },
];

export const RecQuesStats = [
  {
    avatar: Children,
    name: "sarah",
    button: Children,
    title: "how do i ",
    text: "string",
  },
  {},
  {},
];
