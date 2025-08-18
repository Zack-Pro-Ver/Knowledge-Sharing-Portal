import { RiQuestionLine } from "@remixicon/react";
import Button from "../../elements/Button/index";

export const Overview = () => {
  return (
    <>
      <div className="flex flex-row justify-between p-4">
        <div>
          <p className="text-2xl font-bold ">Welcome Back, John!</p>
          <p className="text-base font-normal">
            Heres what happening with your account
          </p>
        </div>

        <Button startIcon={<RiQuestionLine size="medium" />}>
          Add Question
        </Button>
      </div>
      <div></div>
    </>
  );
};
