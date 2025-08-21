import { Search } from "lucide-react"; 
import { Header } from "../../components/Header";

export const MyAnswers = () => {
  return (
    <>
      <Header
        buttonText="Find Question"
        description="Track your contributions and impact"
        icon={<Search size={18} />}
        title="My Answers"
      />
    </>
  );
};
