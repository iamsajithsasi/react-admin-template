import React from "react";
import Header from "./header";
import SideBar from "./sidebar";

export default function LayoutPage(props) {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="grid-container">
        <main className="dashboardMain fullpage noScroll p-grid">
          <SideBar />
          <section className="sectionContent p-col h-100">{props.children}</section>
        </main>
      </div>
    </div>
  );
}
