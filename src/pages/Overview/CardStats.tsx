import { Stack, Typography } from "../../elements";
import Card, { CardContent } from "../../elements/Card";
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
                {/* Left side text */}
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

                  <Typography
                    variant="body2"
                    className={currentWeekCount > 0 ? "green" : "gray"}
                  >
                    {currentWeekCount > 0 ? `+${currentWeekCount}` : 0} this
                    week
                  </Typography>
                </Stack>

                {/* Right side icon */}
                {bgColor ? (
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor}`}
                  >
                    <Icon color={iconColor} />
                  </div>
                ) : (
                  <Icon color={iconColor} />
                )}
              </Stack>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};
