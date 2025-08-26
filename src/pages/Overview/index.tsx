import { RiQuestionLine } from "@remixicon/react";
import { Header } from "../../components/Header";
import { CardStats } from "./CardStats";

export const Overview = () => {
  return (
    <>
      <Header
        buttonText="Add Question"
        // description="Here's what's happening with your account"
        icon={<RiQuestionLine size="medium" />}
        title="Welcome back, John!
"
      />
      <CardStats />
    </>
  );
};
