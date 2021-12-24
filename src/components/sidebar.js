import React, { useState, useEffect } from "react";

import { Sidebar } from "primereact/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../library/store/sidebar";

export default function SideBar() {
  const [visible, setVisible] = useState();
  const sideBarState = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setVisible(sideBarState);
  }, [sideBarState]);

  return (
    <div className="p-col-fixed" style={{ width: "300px" }}>
      <Sidebar
        visible={visible}
        onHide={() => {
          dispatch(closeSideBar());
        }}
      >
        Content
      </Sidebar>
    </div>
  );
}
