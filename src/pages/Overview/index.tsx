import { RiQuestionLine } from "@remixicon/react";
import { Header } from "../../components/Header";
import { RecentQuestionCard } from "./Overviewcard/index";

export const Overview = () => {
  return (
    <>
      <Header
        buttonText="Add Question"
        icon={<RiQuestionLine size="medium" />}
        title="Welcome back, John!"
      />
      <RecentQuestionCard />
    </>
  );
};
