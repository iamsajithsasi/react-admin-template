import React from "react";

import { useDispatch } from "react-redux";
import { openSideBar } from "../library/store/sidebar";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="header-box">header</div>
      <button
        aria-label="open sidebar"
        onClick={() => { dispatch(openSideBar()) }}
      >
        Open
      </button>
    </div>
  );
}
