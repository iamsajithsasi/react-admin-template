import React from "react";
import Header from "./header";
import SideBar from "./sidebar";

export default function LayoutPage(props) {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="fullpage grid-container">
        <main className="dashboardMain p-grid">
          <SideBar />
          {props.children}
        </main>
      </div>
    </div>
  );
}
