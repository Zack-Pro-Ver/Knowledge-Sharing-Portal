import React from "react";
import { Header } from "../../components/Header"; 
import { FiPlus } from "react-icons/fi";

interface MyQuestionsProps {
  headerTitle?: string;
  headerButtonText?: string;
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
        icon={<FiPlus />} 
      />
    </div>
  );
};
