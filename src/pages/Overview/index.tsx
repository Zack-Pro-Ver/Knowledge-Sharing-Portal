import { RiQuestionLine } from "@remixicon/react";
import { Header } from "../../components/Header";

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
    </>
  );
};
