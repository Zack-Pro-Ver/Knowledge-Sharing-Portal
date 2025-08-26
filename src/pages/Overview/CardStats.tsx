import Typography from "../../elements/Typography";
import Card, { CardContent } from "../../elements/Card";
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
              <div className="flex justify-between items-center">
                <div>
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
                </div>
                <div className={`p-2 rounded-full ${bgColor}`}>
                  <Icon className={`w-6 h-6`} style={{ color: iconColor }} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};
