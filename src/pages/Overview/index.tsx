import { RiQuestionLine } from "@remixicon/react";
import { Header } from "../../components/Header";
import { RecentAnswersCard } from "./RecentAnswers"; // Import RecentAnswersCard

export const Overview = () => {
  return (
    <>
      <Header
        buttonText="Add Question"
        showButton={true} // Add showButton property
        // description="Here's what's happening with your account"
        icon={<RiQuestionLine size="medium" />}
        title="Welcome back, John!
"
      />
      <RecentAnswersCard />
    </>
  );
};
