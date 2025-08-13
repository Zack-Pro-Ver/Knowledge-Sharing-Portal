import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h2 className="text-xl font-semibold text-gray-900">Knowledge Portal</h2>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/Overview">
                Overview
              </Link>
              <Link
                to="/Badges">
                Badges
              </Link>
              <Link
                to="/MyQuestions">
                MyQuestions
              </Link>
              <Link
                to="/MyAnswers">
                MyAnswers
              </Link>
              <Link
                to="/MyProfile">
                MyProfile
              </Link>
              <Link
                to="/Notifications">
                Notifications
              </Link>
              <Link
                to="/ContentManagement/AdminControl">
                ContentManagement
              </Link>
              <Link
                to="/ModerationQueue/AdminControl">
                ModerationQueue
              </Link>
              <Link
                to="/UserManagement/AdminControl">
                UserManagement
              </Link>
            </div>
      </div>
    </nav>
  );
};

export default Navigation;
