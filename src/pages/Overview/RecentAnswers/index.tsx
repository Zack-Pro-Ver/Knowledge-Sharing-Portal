import Button from "../../../elements/Button"; // Corrected import
import Card, { CardHeader, CardContent } from "../../../elements/Card";
import Typography from "../../../elements/Typography"; // Corrected import
import { RecentAnswerStats } from "./ReviewAnswersStats";

interface Props {
  title: string;
  accepted: string;
  votes: number;
  action: number; // Changed to number to match RecentAnswerStats
}

export default function RecentAnswersCard() {
  return (
    <Card className="w-[440px] min-h-[180px] p-3 shadow rounded-2xl">
      {/* Header */}
      <CardHeader>
        <div className="flex items-center justify-between">
          <Typography variant="h6">Recent Answers</Typography>
          <Button variant="text" size="small">
            View All
          </Button>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-3">
        {RecentAnswerStats.map(
          ({ title, accepted, votes, action }: Props, index) => (
            <div key={index} className="bg-gray-50 p-2 rounded-lg space-y-2">
              {/* Title */}
              <Typography
                variant="body1"
                className="text-base font-medium truncate p-1"
              >
                {title}
              </Typography>

              {/* Bottom section */}
              <div className="flex justify-between items-center">
                {/* Accepted + Votes */}
                <div className="flex gap-4 items-center">
                  <span className="text-xs bg-blue-100 text-green-600 w-auto px-2 py-1 text-center rounded-lg font-normal">
                    {accepted}
                  </span>
                  <span className="text-sm">{votes} votes</span>
                </div>

                {/* Action / Time */}
                <div>
                  <span className="text-sm font-normal">
                    {action} hours ago
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
}
