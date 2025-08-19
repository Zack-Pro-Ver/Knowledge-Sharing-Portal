import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/HeaderNav";

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-64">
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
