import { RiStarLine, RiQuestionLine, RiChat3Line, RiMedalLine } from "@remixicon/react";

export const ACHIEVEMENTS = [
  {
    label: "Reputation",
    value: "1,247",
    icon: <RiStarLine className="text-yellow-500 text-2xl" />,
    bgColor: "bg-gray-200",
    textColor: "text-gray-900",
  },
  {
    label: "Questions",
    value: "12",
    icon: <RiQuestionLine className="text-blue-500 text-2xl" />,
  },
  {
    label: "Answers",
    value: "28",
    icon: <RiChat3Line className="text-green-500 text-2xl" />,
  },
  {
    label: "Badges",
    value: "8",
    icon: <RiMedalLine className="text-purple-500 text-2xl" />,
  },
];