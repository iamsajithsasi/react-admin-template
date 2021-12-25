import React from "react";

import { useDispatch } from "react-redux";
import { openSideBar } from "../library/store/sidebar";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="header-box shadow">
      header
      <button
        aria-label="open sidebar"
        onClick={() => {
          dispatch(openSideBar());
        }}
      >
        Open
      </button>
    </div>
  );
}
