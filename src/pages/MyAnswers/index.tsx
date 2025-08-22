 import { RiSearchLine } from "react-icons/ri";
import { Header } from "../../components/Header";

export const MyAnswers = () => {
  return (
    <>
      <Header
        buttonText="Find Question"
        description="Track your contributions and impact"
        icon={<RiSearchLine className="absolute left-4 item-center text-white w-5 h-5" />}
        title="My Answers"
      />
    </>
  );
};