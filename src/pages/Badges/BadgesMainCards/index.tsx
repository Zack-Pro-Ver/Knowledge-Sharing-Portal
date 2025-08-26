import { useState } from "react"
import { ProgressBar, Stack, Tab, Typography } from "../../../elements"
import { Card, CardContent, CardHeader, CardFooter } from "../../../elements/Card"
import Chip from "../../../elements/Chip"
import { getAvatarStyles } from "../../../elements/Card/Card.styles"
import { earned, available } from "./BadgesMainCards.constants"
import { RiCheckLine } from "@remixicon/react"
import type { ChipColor } from "../../../elements/Chip/Chip.types"
import { IconWrapper } from "../../../elements/IconWrapper"

const BadgesMainCards = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const tabs = [
        { label: `Earned (${earned.length})` },
        { label: `Available (${available.length})` }
    ]

    const handleTabChange = (index: number) => {
        setActiveIndex(index)
    }

    const chipColors: Record<string, ChipColor> = {
        gold: 'warning',
        silver: 'secondary',
        bronze: 'warning',
        default: 'primary'
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
                        earned.map((item, index) => {
                            console.log(item)
                            return (
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
                                                color={chipColors[item.level.toLowerCase()] ?? chipColors.default}
                                                className="mt-1.5 border-none" />
                                        }
                                        avatar={
                                            <IconWrapper bgColor={item.iconColor} className="h-full"  >
                                                <item.icon />
                                            </IconWrapper>}
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
                        }
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
                                            color={chipColors[item.level.toLowerCase()] ?? chipColors.default}
                                            className="mt-1.5 border-none" />
                                    }
                                    avatar={<div className={`${getAvatarStyles()} ${item.iconColor}`}>
                                        <item.icon />
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
                                    className="border-none !text-gray-500 text-xs justify-start !px-0 !py-0"
                                    children={item.achievement} />
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default BadgesMainCards