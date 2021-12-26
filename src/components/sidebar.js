import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../library/store/sidebar";

import "../assets/css/menu.css";
import { DashboardIcon } from "../assets/icons";

export default function SideBar() {
  const [drawerVisible, setDrawerVisible] = useState();
  const drawerState = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setDrawerVisible(drawerState);
  }, [drawerState]);

  return (
    <div
      className="p-col-fixed p-d-none p-d-lg-block h-100 sidebarWrapper"
      style={{ width: "320px" }}
    >
      {/* side drawer for mobile */}
      <Sidebar
        visible={drawerVisible}
        onHide={() => {
          dispatch(closeSideBar());
        }}
      >
        {menuContent}
      </Sidebar>

      {/* normal sidebar */}
      <div className="menuSidebar p-d-none p-d-lg-flex h-100">
        {menuContent}
      </div>
    </div>
  );
}

const menus = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: <DashboardIcon />,
    iconType: "component",
  },
];

const menuContent = (
  <div className="menus">
    {menus.map((item, index) => (
      <NavLink
        key={index}
        to={item.route}
        className="p-d-flex p-ai-center"
        activeClassName="active"
      >
        {item.iconType == "component" && item.icon}
        <span className="ml-2 menuText">{item.name}</span>
      </NavLink>
    ))}
  </div>
);
