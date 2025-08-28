import {
    RiGraduationCapLine,
    RiTrophyLine,
    RiUserStarLine,
    RiPriceTag3Line,
    RiQuestionLine,
    RiThumbUpLine,
    RiEyeLine,
    RiMedalLine,
    RiStarLine,
    RiLightbulbLine,
    RiHandHeartLine,
    RiChat3Line,
} from "@remixicon/react"

export const earned = [
    {
        icon: RiQuestionLine,
        title: "First Question",
        level: "bronze",
        description: "Asked your first question",
        earnedDate: "2024-01-15",
        status: "earned",
        iconColor: '!bg-blue-100 !text-blue-600'
    },
    {
        icon: RiThumbUpLine,
        title: "Helpful Answer",
        level: "silver",
        description: "Received 10 helpful votes on an answer",
        earnedDate: "2024-01-12",
        status: "earned",
        iconColor: 'bg-green-100 text-green-600'
    },
    {
        icon: RiEyeLine,
        title: "Popular Question",
        level: "bronze",
        description: "Asked a question with 100+ views",
        earnedDate: "2024-01-10",
        status: "earned",
        iconColor: 'bg-purple-100 text-purple-600'

    },
    {
        icon: RiMedalLine,
        title: "Great Answer",
        level: "gold",
        description: "Answer accepted and upvoted 5+ times",
        earnedDate: "2024-01-08",
        status: "earned",
        iconColor: 'bg-yellow-100 text-yellow-600'

    },
    {
        icon: RiChat3Line,
        title: "Active Contributor",
        level: "silver",
        description: "Posted 20+ answers",
        earnedDate: "2024-01-05",
        status: "earned",
        iconColor: 'bg-red-100 text-red-600'

    },
    {
        icon: RiLightbulbLine,
        title: "Knowledge Seeker",
        level: "bronze",
        description: "Asked 10 well-received questions",
        earnedDate: "2024-01-03",
        status: "earned",
        iconColor: '!bg-blue-100 !text-blue-600'

    },
    {
        icon: RiHandHeartLine,
        title: "Community Helper",
        level: "gold",
        description: "Received 50+ helpful votes",
        earnedDate: "2024-01-01",
        status: "earned",
        iconColor: 'bg-pink-100 text-pink-600'

    },
    {
        icon: RiStarLine,
        title: "Rising Star",
        level: "silver",
        description: "Gained 100+ reputation in a week",
        earnedDate: "2023-12-28",
        status: "earned",
        iconColor: 'bg-orange-100 text-orange-600'

    }
]

export const available = [
    {
        icon: RiGraduationCapLine,
        title: "Expert Contributor",
        level: "gold",
        description: "Posted 100+ answers",
        progress: {
            current: 28,
            total: 100,
        },
        achievement: "Post 72 more answers",
        iconColor: "bg-purple-100 text-purple-600"
    },
    {
        icon: RiTrophyLine,
        title: "Legendary",
        level: "platinum",
        description: "Reached 10,000 reputation",
        progress: {
            current: 1247,
            total: 10000,
        },
        achievement: "Gain 8,753 more reputation",
        iconColor: "bg-yellow-100 text-yellow-600"
    },
    {
        icon: RiUserStarLine,
        title: "Mentor",
        level: "silver",
        description: "Help 50 users with accepted answers",
        progress: {
            current: 12,
            total: 50,
        },
        achievement: "Help 38 more users",
        iconColor: "bg-green-100 text-green-600"
    },
    {
        icon: RiPriceTag3Line,
        title: "Tag Master",
        level: "gold",
        description: "Become expert in a specific tag",
        progress: {
            current: 35,
            total: 50,
        },
        achievement: "Answer 15 more JavaScript questions",
        iconColor: "!bg-blue-100 !text-blue-600"
    }
]