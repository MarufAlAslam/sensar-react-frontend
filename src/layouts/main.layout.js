import React from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-start">
      <div className="lg:w-[250px] w-full sidebar-holder">
        <Sidebar />
      </div>
      <div className="lg:w-[calc(100%-250px)] main w-full lg:p-[35px] p-[10px] bg-[#f3f4ff] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
