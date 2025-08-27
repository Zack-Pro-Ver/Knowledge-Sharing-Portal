import type { DropdownOption } from "../../elements/Dropdown/Dropdown.types";

type QuestionStatus = "answered" | "open" | "closed";

interface Question {
  id: number;
  title: string;
  tags: string[];
  votes: number;
  answers: number;
  views: number;
  date: string;
  status: QuestionStatus;
  lastActivity: string;
}

export const statusOptions: DropdownOption[] = [
  { label: "All", value: "all" },
  { label: "Answered", value: "answered" },
  { label: "Open", value: "open" },
  { label: "Closed", value: "closed" },
];

export const sortOptions: DropdownOption[] = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Recent Activity", value: "recent-activity" },
  { label: "Most Votes", value: "most-votes" },
];

export const questions : Question[] = [
  {
    id: 1,
    title: "How to implement authentication in Next.js with NextAuth?",
    tags: ["nextjs", "authentication"],
    votes: 12,
    answers: 3,
    views: 234,
    date: "2025-01-15",
    status: "answered",
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    title: "What is the best way to optimize performance in React applications?",
    tags: ["react", "performance", "optimization"],
    votes: 8,
    answers: 5,
    views: 120,
    date: "2025-01-20",
    status: "open",
    lastActivity: "2 days ago",
  },
  {
    id: 3,
    title: "How do I manage state globally in React?",
    tags: ["react", "state-management"],
    votes: 20,
    answers: 6,
    views: 450,
    date: "2025-01-27",
    status: "open",
    lastActivity: "2 weeks ago",
  },
];
