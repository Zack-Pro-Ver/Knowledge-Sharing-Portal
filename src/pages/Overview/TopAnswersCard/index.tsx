import React from "react";
import { Button } from "../../../elements";
import Card, { CardHeader } from "../../../elements/Card";
import { IconWrapper } from "../../../elements/IconWrapper";
import Stack from "../../../elements/Stack";
import Typography from "../../../elements/Typography";
import { TopAnswersCardStats } from "./topanswerstats";
import type { RemixiconComponentType } from "@remixicon/react";

interface Props {
  image?: React.ReactNode;
  title: string;
  description: number;
  likes?: number;
  views?: number;
  topic: string;
  subtopic: string;
  tag1: string;
  tag2: string;
  tag3: string;
  action?: number;
  bgColor?: string;
  iconColor: string;
  likesIcon?: RemixiconComponentType;
  Icon?: RemixiconComponentType;
  viewsIcon?: RemixiconComponentType;
}

export const TopAnswersCard = () => {
  return (
    <Card className="w-110-h-180 p-3">
      <CardHeader>
        <Stack direction="row" justify-content alignItems="center">
          <Typography variant="h6">Add Questions</Typography>
          <Button variant="text">View All</Button>
        </Stack>
      </CardHeader>

      <Stack direction="column" spacing={3}>
        {TopAnswersCardStats.map(
          (
            {
              image,
              title,
              description,
              likes,
              views,
              topic,
              subtopic,
              tag1,
              tag2,
              tag3,
              action,
              bgColor,
              iconColor,
              Icon,
              likesIcon,
              viewsIcon,
            }: Props,
            index
          ) => (
            <Stack key={index} direction="column" spacing={3} className="p-3">
              <Stack
                direction="column"
                spacing={2}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Stack direction="row" spacing={3} alignItems="flex-start">
                    {image && <div className="p-2">{image}</div>}

                    <Stack direction="column" spacing={1}>
                      <Typography variant="subtitle1" fontWeight="medium">
                        {title}
                      </Typography>
                      <Stack direction="row" spacing={4} alignItems="center">
                        {description && description > 0 && (
                          <Typography variant="caption">
                            {description} k rep
                          </Typography>
                        )}
                        {Icon && (
                          <IconWrapper bgColor={bgColor || ""}>
                            {Icon && <Icon className={iconColor} />}
                          </IconWrapper>
                        )}
                      </Stack>
                    </Stack>
                  </Stack>

                  <Stack direction="row" spacing={3} alignItems="center">
                    <Stack direction="row" spacing={1} alignItems="center">
                      {likesIcon && (
                        <i className="text-green-500">
                          {React.createElement(likesIcon)}
                        </i>
                      )}
                      <Typography variant="caption" fontWeight="medium">
                        {likes}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      {viewsIcon && (
                        <i className="text-gray-600">
                          {React.createElement(viewsIcon)}
                        </i>
                      )}
                      <Typography variant="caption">
                        {views && views > 0 ? `${views}k` : null}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Stack direction="column" spacing={2} className="p-2">
                  <Typography variant="subtitle2" fontWeight="medium">
                    {topic}
                  </Typography>
                  <Typography variant="body2">{subtopic}</Typography>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={2}>
                      <Typography
                        variant="caption"
                        className="bg-blue-100 text-blue-600 p-1 rounded"
                      >
                        {tag1}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="bg-blue-100 text-blue-600 p-1 rounded"
                      >
                        {tag2}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="bg-blue-100 text-blue-600 p-1 rounded"
                      >
                        {tag3}
                      </Typography>
                    </Stack>
                    <Typography variant="caption">
                      {action && action > 0 ? `${action} hours ago` : null}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          )
        )}
      </Stack>
    </Card>
  );
};
