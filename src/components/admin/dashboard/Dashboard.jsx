import React from "react";
import DashboardStatsGrid from "./dashboardGrid/DashboardStatsGrid";
import TransactionChart from "./transactionChart/TransactionChart";
import BuyerProfilePieChart from "./buyerProfileChart/BuyerProfilePieChart";
import RecentOrders from "./recentOrders/RecentOrders";
import PopularProducts from "./popularProducts/PopularProducts";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <DashboardStatsGrid />
        <div className="flex flex-row gap-4 w-full">
          <TransactionChart />
          <BuyerProfilePieChart />
        </div>
        <div className="flex flex-row gap-4 w-full">
          <RecentOrders />
          <PopularProducts />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
