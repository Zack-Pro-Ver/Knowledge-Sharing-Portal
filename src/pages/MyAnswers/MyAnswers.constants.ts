import {
  RiChat1Line,
  RiCheckDoubleLine,
  RiThumbUpLine,
  RiStarSLine
} from "@remixicon/react";

export interface Stat {
  id: number;
  title: string;
  subheader: string;
  icon: React.ElementType;
  bg: string;
  color: string;
}

export const stats: Stat[] = [
  {
    id: 1,
    title: "28",
    subheader: "Total Answers",
    icon: RiChat1Line,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "12",
    subheader: "Accepted",
    icon: RiCheckDoubleLine,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    id: 3,
    title: "156",
    subheader: "Total Votes",
    icon: RiThumbUpLine,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    id: 4,
    title: "5.6",
    subheader: "Avg Rating",
    icon: RiStarSLine,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
];

 export const answers = [
     {
      id: 1,
      title: "CSS Grid vs Flexbox: When to use which?",
      tags: ["css", "layout", "frontend"],
      description:
        "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes...",
      status: "answered",
      answeredAt: new Date(), 
      lastActivity: new Date(),
      actions: ["View", "Edit"],
      votes: 18,
      createdAt: new Date(), 
    },
    {
      id: 2,
      title: "Difference between useState and useRef?",
      tags: ["react", "hooks"],
      description:
        "`useState` triggers re-renders on update while `useRef` stores mutable values without re-rendering.",
      status: "answered",
      answeredAt: new Date(),
      lastActivity: new Date(),
      actions: ["View", "Edit"],
      votes: 12,
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Database design patterns for scalability?",
      tags: ["database", "design", "scalability"],
      description:
        "For scalable database design, consider: sharding, read replicas, caching strategies...",
      status: "answered",
      answeredAt: new Date(),
      lastActivity: new Date(),
      actions: ["View", "Edit"],
      votes: 34,
      createdAt: new Date(),
    },
    {
      id: 4,
      title: "Node.js security best practices?",
      tags: ["nodejs", "security", "backend"],
      description:
        "Security in Node.js requires: authentication, authorization, input validation, secure headers...",
      status: "accepted",
      answeredAt: new Date(),
      lastActivity: new Date(),
      actions: ["View", "Edit"],
      votes: 50,
      createdAt: new Date(),
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox: When to use which?",
      tags: ["css", "layout", "frontend"],
      description:
        "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Grid is for 2D layouts, while Flexbox is for 1D layouts...",
      status: "answered",
      answeredAt: new Date(),
      lastActivity: new Date(),
      actions: ["View", "Edit"],
      votes: 18,
      createdAt: new Date(),
    },
  ]
  export const filters = [
    {
      id: "status",
      options: [
        { value: "all", label: "All Status" },
        { value: "accepted", label: "Accepted" },
        { value: "answered", label: "Answered" },
        { value: "pending", label: "Pending" },
      ],
    },
    {
      id: "sort",
      options: [
        { value: "newest", label: "Newest" },
        { value: "oldest", label: "Oldest" },
        { value: "most votes", label: "Most Votes" },
        { value: "recent activity", label: "Recent Activity" },
      ],
    },
  ]
