import React from "react";
import { Header } from "../../components/Header"; 
import { RiAddLine} from "@remixicon/react"

interface MyQuestionsProps {
  headerTitle: string;
  headerButtonText: string;
}

export const MyQuestions: React.FC<MyQuestionsProps> = ({
  headerTitle = "My Questions",
  headerButtonText = "Ask Question",
}) => {
  return (
    <div className="bg-gray-50 p-4">
      <Header
        title={headerTitle}
        buttonText={headerButtonText}
        showButton={true}
        icon={<RiAddLine />} 
      />
    </div>
  );
};
