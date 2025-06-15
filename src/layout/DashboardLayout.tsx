import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="flex mt-[90px]">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>
        {/* Main Content */}
      </div>
    </div>
  );
};

export default DashboardLayout;
