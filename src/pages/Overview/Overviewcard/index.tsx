// import { Button } from "../../elements";
// import Card, { CardContent } from "../../elements/Card";
// import { RecentQuestionCardStats } from "./RecentQuestionCardStats";

// interface CardItemProps {
//   img?: React.ReactNode;
//   title?: string;
//   action?: string;
//   description?: string;
//   actionsDone: string;
//   totalActions: number;
//   actionVotes: number;
//   btnText: string;
// }

// interface RecentQuestionCardProps {
//   cards?: CardItemProps[];
// }

// export const RecentQuestionCard = ({
//   cards = RecentQuestionCardStats,
// }: RecentQuestionCardProps) => {
//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
//         {cards.map(
//           (
//             {
//               title,
//               description,
//               img,
//               totalActions,
//               action,
//               actionVotes,
//               actionsDone,
//               btnText,
//             }: CardItemProps,
//             index
//           ) => (
//             <Card key={index}>
//               <CardContent>
//                 <div className="">
//                   {/* Top Row */}
//                   <div className="grid grid-cols-[auto_1fr_auto] items-center justify-center gap-2 p-0 ">
//                     <div className="flex gap-4 items-center justify-between p-2 ">
//                       <div className="shrink-0">{img}</div>
//                       <div className="w-auto">
//                         <p className="text-sm font-medium text-gray-900 dark:text-white">
//                           {title}
//                         </p>
//                       </div>
//                       <div>
//                         <p className="w-20 text-sm font-normal text-gray-700 dark:text-gray-300">
//                           {action}
//                         </p>
//                       </div>
//                     </div>

//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       className=" w-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
//                       text-xs rounded-lg  text-white dark:bg-blue-600
//                       dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       {btnText}
//                     </Button>
//                   </div>

//                   {/* Description */}
//                   <div className="">
//                     <p className="p-1 text-base font-medium text-gray-900 dark:text-white">
//                       {description}
//                     </p>
//                   </div>

//                   {/* Stats Row */}
//                   <div className="flex gap-4">
//                     <span className="text-xs bg-green-100 px-2 py-1 rounded-lg text-gray-800">
//                       {actionsDone}
//                     </span>
//                     <span className="text-xs text-gray-600 dark:text-gray-400">
//                       {totalActions > 0 ? `+${totalActions}` : 0} answers
//                     </span>
//                     <span className="text-xs text-gray-600 dark:text-gray-400">
//                       {actionVotes > 0 ? `+${actionVotes}` : 0} votes
//                     </span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           )
//         )}
//       </div>
//     </>
//   );
// };

import { Button } from "../../../elements";
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
      <Card className="w-110 h-180 p-3">
        <CardHeader
          title="add questions"
          className="w-100% flex justify-between p-5 "
        >
          <Button variant="text" className="">
            view all
          </Button>
        </CardHeader>

        <div className="w-108  grid gap-3 p-2">
          <div className=" md:grid-cols-2 lg:grid-cols-3  w-100  ">
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
                <div className="p-2">
                  <CardContent
                    key={index}
                    className="grid w-full h-full  grid-col gap-2  bg-gray-100  rounded-lg  p-2"
                  >
                    {/* Top Row: Icon + Title + Action + Button */}
                    <div className="flex flex-row justify-between items-center gap-3 w-full">
                      <div className="flex flex-row items-center gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 items-center">
                          {img}
                        </div>

                        <div className="flex min-w-0 items-center gap-2">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {title}
                          </p>
                          <p className="whitespace-nowrap text-sm font-normal text-gray-700 dark:text-gray-300">
                            {action}
                          </p>
                        </div>
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
                </div>
              )
            )}
          </div>
        </div>
      </Card>
    </>
  );
};
