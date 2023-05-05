import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Sidebar from "../sidebar/Sidebar";
import AppHeader from "../appHeader/AppHeader";

const MainLayout = () => {
  return (
    <>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <AppHeader />
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
