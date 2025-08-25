import { Button } from "../../../elements";
import { Card, CardContent, CardHeader } from "../../../elements/Card";
import Typography from "../../../elements/Typography";
import { RecentBadges } from "./RecentBadgesCards";
import Stack from "../../../elements/Stack";

interface BadgeProps {
  title: string;
  type: string;
  earnedAt: string;
}

export default function RecentBadgesCard() {
  return (
    <Card className="w-[100%] min-h-[180px] p-3 shadow rounded-2xl">
      {/* Header */}
      <CardHeader title="Recent Badges" className="flex justify-between p-5">
        <Button variant="text" size="small">
          View All pages
        </Button>
      </CardHeader>

      {/* Content in Stack */}
      <CardContent>
        <Stack direction="row" spacing={4} wrap="wrap" className="p-4">
          {RecentBadges.map(({ title, type, earnedAt }: BadgeProps, index) => (
            <Stack
              key={index}
              direction="column"
              spacing={2}
              className="bg-gray-50 p-3 rounded-lg w-[330px] flex justify-between"
            >
              {/* Badge title */}
              <Typography variant="body2" className="font-medium truncate">
                {title}
              </Typography>

              {/* Badge details */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="caption"
                  className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-lg"
                >
                  {type}
                </Typography>
                <Typography variant="caption" className="text-gray-500">
                  {earnedAt}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
