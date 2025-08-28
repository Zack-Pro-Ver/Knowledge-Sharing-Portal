import Card, { CardContent } from "../../../elements/Card"
import { Stack, Typography } from "../../../elements"
import { countColor, cardData } from "./BadgesCards.constants"

const BadgesCards = () => {
    return (
        <Stack className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {cardData.map((item, index) => (
                <Card
                    key={index}
                    variant="outlined"
                    >

                    <CardContent>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={0}>

                            <Typography fontWeight="semibold" variant="h4" color={countColor[item.badge]}>
                                {item.count}
                            </Typography>

                            <Typography variant="body2" color="textSecondary">
                                {item.badge}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            ))
            }
        </Stack >
    )
}

export default BadgesCards