import Card, { CardHeader } from "../../elements/Card";
import {
  RiChat1Line,
  RiCheckDoubleLine,
  RiStarLine,
  RiThumbUpLine,
  
} from "@remixicon/react";


export const MyAnswers = () => {
  const answers = [
    {
      id: 1,
      title: "28",
      subheader: "Total Answers",
      icon: < RiChat1Line className="w-5 h-5" />,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      id: 2,
      title: "12",
      subheader: "Accepted",
      icon: <RiCheckDoubleLine className="w-5 h-5" />,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      id: 3,
      title: "156",
      subheader: "Total Votes",
      icon: <RiStarLine className="w-5 h-5" />,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
    {
      id: 4,
      title: "5.6",
      subheader: "Avg Rating",
      icon: <RiThumbUpLine className="w-4 h-4" />,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="flex justify-center gap-6 ml-0 mt-8">
      {answers?.map((answer) => (
        <Card
          key={answer?.id}
          variant="outlined"
          size="small"
          elevation={2}
          className="w-64"
        >
          <CardHeader
            avatar={
              <div
                className={`flex items-center justify-center 
                w-10 h-10 rounded-full ${answer?.bg} ${answer?.color}`}
              >
                {answer?.icon}
              </div>
            }
            title={<span className="text-lg font-semibold">{answer?.title}</span>}
            subheader={<span className="text-sm text-gray-600">{answer?.subheader}</span>}
          />
        </Card>
      ))}
    </div>
  );
};