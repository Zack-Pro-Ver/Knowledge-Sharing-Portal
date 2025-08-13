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
                to="/overview">
                Overview
              </Link>
            </div>
      </div>
    </nav>
  );
};

export default Navigation;
