import { useState } from "react"
import { ProgressBar, Stack, Tab, Typography } from "../../../elements"
import { Card, CardContent, CardHeader, CardFooter } from "../../../elements/Card"
import {
    RiGraduationCapLine,
    RiTrophyLine,
    RiUserStarLine,
    RiPriceTag3Line
} from "@remixicon/react"
import {
    RiQuestionLine,
    RiThumbUpLine,
    RiEyeLine,
    RiMedalLine,
    RiStarLine,
    RiLightbulbLine,
    RiHandHeartLine,
    RiChat3Line,
    RiCheckLine
} from "@remixicon/react"
import Chip from "../../../elements/Chip"
import { getAvatarStyles } from "../../../elements/Card/Card.styles"

const earned = [
    {
        icon: <RiQuestionLine />,
        title: "First Question",
        level: "bronze",
        description: "Asked your first question",
        earnedDate: "2024-01-15",
        status: "earned",
        iconColor: '!bg-blue-100 !text-blue-600'
    },
    {
        icon: <RiThumbUpLine />,
        title: "Helpful Answer",
        level: "silver",
        description: "Received 10 helpful votes on an answer",
        earnedDate: "2024-01-12",
        status: "earned",
        iconColor: 'bg-green-100 text-green-600'
    },
    {
        icon: <RiEyeLine />,
        title: "Popular Question",
        level: "bronze",
        description: "Asked a question with 100+ views",
        earnedDate: "2024-01-10",
        status: "earned",
        iconColor: 'bg-purple-100 text-purple-600'

    },
    {
        icon: <RiMedalLine />,
        title: "Great Answer",
        level: "gold",
        description: "Answer accepted and upvoted 5+ times",
        earnedDate: "2024-01-08",
        status: "earned",
        iconColor: 'bg-yellow-100 text-yellow-600'

    },
    {
        icon: <RiChat3Line />,
        title: "Active Contributor",
        level: "silver",
        description: "Posted 20+ answers",
        earnedDate: "2024-01-05",
        status: "earned",
        iconColor: 'bg-red-100 text-red-600'

    },
    {
        icon: <RiLightbulbLine />,
        title: "Knowledge Seeker",
        level: "bronze",
        description: "Asked 10 well-received questions",
        earnedDate: "2024-01-03",
        status: "earned",
        iconColor: '!bg-blue-100 !text-blue-600'

    },
    {
        icon: <RiHandHeartLine />,
        title: "Community Helper",
        level: "gold",
        description: "Received 50+ helpful votes",
        earnedDate: "2024-01-01",
        status: "earned",
        iconColor: 'bg-pink-100 text-pink-600'

    },
    {
        icon: <RiStarLine />,
        title: "Rising Star",
        level: "silver",
        description: "Gained 100+ reputation in a week",
        earnedDate: "2023-12-28",
        status: "earned",
        iconColor: 'bg-orange-100 text-orange-600'

    }
]

const available = [
    {
        icon: <RiGraduationCapLine />,
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
        icon: <RiTrophyLine />,
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
        icon: <RiUserStarLine />,
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
        icon: <RiPriceTag3Line />,
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

const BadgesMainCards = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const tabs = [
        { label: `Earned (${earned.length})` },
        { label: `Available (${available.length})` }
    ]

    const handleTabChange = (index: number) => {
        setActiveIndex(index)
    }

    const getChipColor = (level: string) => {
        switch (level.toLowerCase()) {
            case "gold":
                return "warning"
            case "silver":
                return "secondary"
            case "bronze":
                return "warning"
            default:
                return "primary"
        }
    }

    return (
        <div className="bg-white rounded-lg border border-gray-200 ">
            <div className="border-b border-gray-200">
                <Tab
                    tabs={tabs}
                    activeIndex={activeIndex}
                    onTabChange={handleTabChange}
                />
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeIndex === 0 &&
                        earned.map((item, index) =>
                        (
                            <Card
                                variant="outlined"
                                size="small"
                                className="!bg-gray-50 p-4"
                                key={index}>
                                <CardHeader
                                    className="border-none !px-0 !py-0"
                                    title={item.title}
                                    subheader={
                                        <Chip
                                            label={item.level}
                                            size="small"
                                            color={getChipColor(item.level)}
                                            className="mt-1.5 border-none" />
                                    }
                                    avatar={
                                        <div className={`${getAvatarStyles()} ${item.iconColor}`}>
                                            {item.icon}
                                        </div>}
                                />
                                <CardContent className="!px-0 !py-1">
                                    <Typography
                                        variant="body2"
                                        className="!text-gray-600"
                                        noWrap={true}
                                        children={item.description} />
                                </CardContent>
                                <CardFooter className="border-none !px-0 !py-0 !block" >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography
                                            className="!text-gray-600 text-xs"
                                            children={`${item.status} ${item.earnedDate}`} />
                                        <Typography
                                            children={<RiCheckLine className='!text-green-600' />} />
                                    </Stack>
                                </CardFooter>
                            </Card>
                        )
                        )
                    }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeIndex === 1 &&
                        available.map((item, index) => (
                            <Card
                                variant="outlined"
                                size="medium"
                                className="!bg-gray-50 p-4"
                                key={index} >
                                <CardHeader
                                    className="border-none !px-0 !py-0"
                                    title={item.title}
                                    subheader={
                                        <Chip
                                            label={item.level}
                                            size="small"
                                            color={getChipColor(item.level)}
                                            className="mt-1.5 border-none" />
                                    }
                                    avatar={<div className={`${getAvatarStyles()} ${item.iconColor}`}>
                                        {item.icon}
                                    </div>} />
                                <CardContent className="!px-0 !py-1.5">
                                    <Typography
                                        variant="body2"
                                        className="!text-gray-600"
                                        noWrap={true}
                                        children={item.description} />

                                    <div className="mt-2 space-y-2">
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between">
                                            <Typography
                                                children='progress'
                                                variant="body2"
                                                className="!text-gray-500" />
                                            <Typography
                                                variant="body2"
                                                className="!text-gray-700"
                                                children={`${item.progress.current}/${item.progress.total}`} />
                                        </Stack>
                                        <ProgressBar
                                            progress={(item.progress.current / item.progress.total) * 100}
                                            size="small"
                                            fullWidth={true}
                                            color="primary"
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter
                                    className="border-none !text-gray-500 text-xs justify-start !px-0 !py-0" children={item.achievement} />
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default BadgesMainCards