import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const DashboardLayout = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setisMobileMenuOpen={setisMobileMenuOpen}
      />
      <div className="flex mt-[70px] md:mt-[90px]">
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} />

        {/* Main Content */}
        <main className="flex-1 relative overflow-auto">
          <Outlet />
        </main>
        {/* Main Content */}
      </div>
    </div>
  );
};

export default DashboardLayout;
