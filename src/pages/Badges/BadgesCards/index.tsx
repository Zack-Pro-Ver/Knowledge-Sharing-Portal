import Card, { CardContent } from "../../../elements/Card"
import { Typography } from "../../../elements"
import type { TypographyColor } from "../../../elements/Typography/Typography.types"

interface CardItem {
    count: string
    badge: string
}

const countColor: Record<string, TypographyColor> = {
    "Silver": "secondary",    
    "Total Badges": "textPrimary",
    "Bronze": "warning",      
    "Gold": "warning",        
    "Platinum": "primary",
}

const cardData: CardItem[] = [
    {
        count: "8",
        badge: "Total Badges",
    },
    {
        count: "3",
        badge: "Bronze",
    },
    {
        count: "3",
        badge: "Silver",
    },
    {
        count: "2",
        badge: "Gold",
    },
    {
        count: "0",
        badge: "Platinum",
    }
]

const BadgesCards = () => {
    return (
        <div className="grid grid-cols-5">
            {cardData.map((item, index) => (
                <Card
                    key={index}
                    variant="outlined"
                    className="w-47 ">

                    <CardContent
                        className="flex flex-col justify-center items-center">

                        <Typography fontWeight="semibold" variant="h4" color={countColor[item.badge]}>
                            {item.count}
                        </Typography>


                        <Typography variant="body2" color="textSecondary">
                            {item.badge}
                        </Typography>
                    </CardContent>
                </Card>
            ))
            }
        </div >
    )
}

export default BadgesCards