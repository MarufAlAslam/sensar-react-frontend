import React from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="lg:w-[250px] md:w-full sidebar-holder">
        <Sidebar />
      </div>
      <div className="lg:w-[calc(100%-250px)] md:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
