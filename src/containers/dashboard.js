import React from "react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  let x = Array.from(Array(220).keys());
  return (
    <>
      dashbaord page
      {x.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
}
