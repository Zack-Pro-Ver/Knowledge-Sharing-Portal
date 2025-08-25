import { Stack, Typography } from "../../elements";
import Card, { CardContent } from "../../elements/Card";
import { IconWrapper } from "../../elements/IconWrapper";
import { UserStats } from "./Overview.constants";

export const CardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {UserStats.map(
        (
          {
            title,
            bgColor,
            currentWeekCount,
            icon: Icon,
            totalCount,
            iconColor,
          },
          index
        ) => (
          <Card key={index}>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                
                <Stack direction="column" spacing={1}>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    className="tracking-tight"
                  >
                    {title}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="textPrimary"
                  >
                    {totalCount}
                  </Typography>

                <typography
                    variant="body2"
                    className={
                      currentWeekCount > 0 ? "text-green-500" : "text-gray-500"
                    }
                  >
                    {currentWeekCount > 0 ? `+${currentWeekCount}` : 0} this
                    week
                  </typography> */}
                </Stack>
                <IconWrapper bgColor={bgColor}>
                  <Icon className={iconColor} />
                </IconWrapper>
              </Stack>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};
