import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/pagenotfound.svg";

export default function NotfoundPage() {
  return (
    <>
      <div className="pageNotFound">
        <img src={image} alt="404" />
        <h2 className="text-center">Oops! Page not found!</h2>
        <p className="text-center">
          Looks like the page you're trying to visit dosen't exist. Please check
          the URL and try your luck again.
        </p>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}