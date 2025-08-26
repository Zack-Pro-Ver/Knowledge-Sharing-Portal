import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";  

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
        <main className="flex-1 overflow-y-auto ml-64 p-10">
          <Outlet />
      </main>
      </div>
  );
};

export default MainLayout;
