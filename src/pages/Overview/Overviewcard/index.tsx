import { Button, Stack, Typography } from "../../../elements";
import Card, { CardContent, CardHeader } from "../../../elements/Card";
import { RecentQuestionCardStats } from "./overviewcardstats";

interface CardItemProps {
  img?: React.ReactNode;
  title?: string;
  action?: string;
  description?: string;
  actionsDone: string;
  totalActions: number;
  actionVotes: number;
  btnText: string;
}

interface RecentQuestionCardProps {
  cards?: CardItemProps[];
}

export const RecentQuestionCard = ({
  cards = RecentQuestionCardStats,
}: RecentQuestionCardProps) => {
  return (
    <>
      <CardHeader title="add questions">
        <Button variant="text">view all</Button>
      </CardHeader>

      <Stack direction="row" spacing={6} className="w-full flex-wrap">
        {cards.map(
          (
            {
              title,
              description,
              img,
              totalActions,
              action,
              actionVotes,
              actionsDone,
              btnText,
            }: CardItemProps,
            index
          ) => (
            <Card key={index} className="w-80">
              <CardContent className="flex flex-col gap-3 p-4">
                {/* Top Row: Icon + Title + Action + Button */}
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="row" spacing={3} align="center">
                    <div className="shrink-0">{img}</div>
                    <Typography variant="body2" className="font-medium text-gray-900 dark:text-white">
                      {title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-700 dark:text-gray-300">
                      {action}
                    </Typography>
                  </Stack>

                  <Button
                    variant="outlined"
                    color="primary"
                    className="w-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                      text-xs rounded-lg text-white dark:bg-blue-600
                      dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {btnText}
                  </Button>
                </Stack>

                {/* Description */}
                <Typography variant="body1" className="font-medium text-gray-900 dark:text-white">
                  {description}
                </Typography>

                {/* Stats Row */}
                <Stack direction="row" spacing={4} align="center">
                  <Typography
                    variant="caption"
                    className="bg-green-100 px-2 py-1 rounded-lg text-gray-800"
                  >
                    {actionsDone}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 dark:text-gray-400">
                    {totalActions > 0 ? `+${totalActions}` : 0} answers
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 dark:text-gray-400">
                    {actionVotes > 0 ? `+${actionVotes}` : 0} votes
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          )
        )}
      </Stack>
    </>
  );
};
