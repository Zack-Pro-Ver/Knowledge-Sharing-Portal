import { Button } from "../../../elements";
import { Card, CardContent, CardHeader } from "../../../elements/Card";
import { Typography } from "../../../elements";
import { RecentBadges } from "./RecentBadgesCards";

interface BadgeProps {
  title: string;
  type: string;
  earnedAt: string;
}

export default function RecentBadgesCard() {
  return (
    <Card className="w-[100%] min-h-[180px] p-3 shadow rounded-2xl">
      {/* Header */}
      <CardHeader>
        <div className="flex items-center justify-between ">
          <Typography variant="h6">Recent Badgges</Typography>
          <Button variant="text" size="small">
            View All pages
          </Button>
        </div>
      </CardHeader>

      {/* Content in row */}
      <CardContent className="">
        <div className="flex flex-row gap-7 p-4 flex-wrap w-100% ">
          {RecentBadges.map(({ title, type, earnedAt }: BadgeProps, index) => (
            <div
              key={index}
              className="bg-gray-50 p-3 rounded-lg w-[330px] flex flex-col justify-between"
            >
              {/* Badge title */}
              <p className="text-sm font-medium truncate">{title}</p>

              {/* Badge details */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-lg">
                  {type}
                </span>
                <p className="text-xs text-gray-500">{earnedAt}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
