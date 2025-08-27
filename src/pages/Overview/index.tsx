import { RiQuestionLine } from "@remixicon/react";
import { Header } from "../../components/Header";
import { TopAnswersCard } from "./TopAnswersCard";

export const Overview = () => {
  return (
    <>
      <Header
        buttonText="Add Question"
        showButton={true} // Added required property
        icon={<RiQuestionLine size="medium" />}
        title="Welcome back, John!"
      />
      <TopAnswersCard />
    </>
  );
};
