// UserAchievement.tsx
import React from "react";
import Card from "../../../../elements/Card";
import {Typography} from "../../../../elements";
import { Stack } from "../../../../elements";
import { ACHIEVEMENTS } from "./AchievementCard";

const UserAchievements = () => (
  <Stack
    direction="row"
    spacing={6}
    alignItems="flex-start"
    justifyContent="center"
    wrap="wrap"
    className="w-full"
  >
    {ACHIEVEMENTS.map((item) => (
      <Card
        key={item.label}
        variant="elevation"
        size="medium"
        className={`min-w-[110px] px-6 py-4 bg-gray-100  flex flex-col items-center`}      >
        <div className="mb-2 flex items-center justify-center">{item.icon}</div>
        <Typography variant="h6" color="textPrimary" className={`font-semibold ${item.textColor}`}>
          {item.value}
        </Typography>
        <Typography variant="caption" color="textSecondary" className="mt-1">
          {item.label}
        </Typography>
      </Card>
    ))}
  </Stack>
);

export default UserAchievements;
