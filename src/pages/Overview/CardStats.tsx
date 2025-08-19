import Card, { CardContent } from "../../elements/Card";
import { UserStats } from "./Overview.constants";

export const CardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
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
                  <h1 className="text-sm font-normal tracking-tight text-gray-900 dark:text-white">
                    {title}{" "}
                  </h1>
                  <h2 className="mt-0 text-2xl font-bold text-gray-900 dark:text-white">
                    {totalCount}
                  </h2>
                  <p className="text-sm font-normal text-green-500 dark:text-gray-400">
                    {`${
                      currentWeekCount > 0 ? `+${currentWeekCount}` : 0
                    } this week`}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor}`}
                >
                  {<Icon color={iconColor} />}
                </div>
              </div>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};
