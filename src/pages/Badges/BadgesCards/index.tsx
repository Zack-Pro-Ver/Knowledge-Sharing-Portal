import Card, { CardContent } from "../../../elements/Card"

interface CardItem {
    count: string
    badge: string
}

const countColor: Record<string, string> = {
    "Silver": "text-gray-600",
    "Total Badges": "text-gray-900",
    "Bronze": "text-amber-600",
    "Gold": "text-yellow-600",
    "Platinum": "text-purple-600",
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

const BadgesCards: React.FC = () => {
    return (
        <div className="grid grid-cols-5">
            {cardData.map((item, index) => (
                <Card
                    key={index}
                    variant="outlined"
                    className="w-47 ">

                    <CardContent
                        className="flex flex-col justify-center items-center">

                        <h3
                            className={`text-2xl font-bold ${countColor[item.badge] || "text-gray-900"}`}
                        >
                            {item.count}
                        </h3>

                        <p className="text-sm text-gray-600" >
                            {item.badge}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default BadgesCards