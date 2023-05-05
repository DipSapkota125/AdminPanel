import React from "react";
import { FcBullish } from "react-icons/fc";
import { DashboardBottom, DashboardLinks } from "../constants";
// import SideBarLink from "./SideBarLink";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
const Sidebar = () => {
  return (
    <>
      <div className="bg-neutral-900 w-60 p-3 flex flex-col">
        <div className="flex items-center gap-2 px-1 py-3">
          <FcBullish fontSize={24} />
          <span className="text-neutral-200 text-lg">OpenShop</span>
        </div>
        <div className="py-8 flex flex-1 flex-col gap-0.5">
          {DashboardLinks.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          {DashboardBottom.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
          <div className={classNames(linkClass, "cursor-pointer text-red-500")}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}

export default Sidebar;
