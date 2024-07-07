"use client";

import SideBar from "@/components/sidenav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <SideBar />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default DashboardLayout;
