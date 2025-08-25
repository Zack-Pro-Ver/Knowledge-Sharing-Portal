import { Button } from "../../../elements";
import Card, { CardContent, CardHeader } from "../../../elements/Card";
import { RecentQuestionCardStats } from "../../Overview/CardStats";

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
      <div className="w-80 grid grid-rows-3  gap-7">
        <div className="md:grid-cols-2 lg:grid-cols-3">
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
              <Card key={index}>
                <CardContent className="flex flex-col gap-3 p-4">
                  {/* Top Row: Icon + Title + Action + Button */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0">{img}</div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {title}
                      </p>
                      <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                        {action}
                      </p>
                    </div>
                    <Button
                      variant="outlined"
                      color="primary"
                      className="w-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                    text-xs rounded-lg text-white dark:bg-blue-600
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {btnText}
                    </Button>
                  </div>

                  {/* Description */}
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    {description}
                  </p>

                  {/* Stats Row */}
                  <div className="flex gap-4 items-center">
                    <span className="text-xs bg-green-100 px-2 py-1 rounded-lg text-gray-800">
                      {actionsDone}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {totalActions > 0 ? `+${totalActions}` : 0} answers
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {actionVotes > 0 ? `+${actionVotes}` : 0} votes
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </>
  );
};
