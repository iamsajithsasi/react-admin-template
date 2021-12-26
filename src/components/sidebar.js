import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../library/store/sidebar";

import "../assets/css/menu.css";

export default function SideBar() {
  const [drawerVisible, setDrawerVisible] = useState();
  const [sideBarTextVisible, setSideBarTextVisible] = useState(true);
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
      <div
        className={
          "menuSidebar p-d-none p-d-lg-flex h-100" + sideBarTextVisible
            ? "text-visible"
            : "text-hidden"
        }
      >
        {menuContent}
      </div>
    </div>
  );
}

const menus = [{ name: "Dashboard", route: "/", icon: "pagenotfound.svg" }];

const menuContent = (
  <>
    {menus.map((item, index) => (
      <NavLink
        key={index}
        to={item.route}
        className="p-d-flex p-ai-center"
        activeClassName="active"
      >
        <img
          src={"./assets/images/" + item.icon}
          alt={item.name}
          className="menuIcon mr-2"
        />
        <span className="menuText">{item.name}</span>
      </NavLink>
    ))}
  </>
);
