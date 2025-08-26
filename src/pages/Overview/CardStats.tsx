import { Stack, Typography } from "../../elements";
import Card, { CardContent } from "../../elements/Card";
import { IconWrapper } from "../../elements/IconWrapper";
import { UserStats } from "./Overview.constants";

export const CardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
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
                <Stack spacing={1}>
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

                  <Typography
                    variant="body2"
                    color={currentWeekCount > 0 ? "success" : "textSecondary"}
                    align="left"
                  >
                    {currentWeekCount > 0 ? `+${currentWeekCount}` : 0} this
                    week
                  </Typography>
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
