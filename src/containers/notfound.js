import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/pagenotfound.svg";

import "../assets/css/pagenotfound.css"

export default function NotfoundPage() {
  return (
    <>
      <div className="pageNotFound d-flex p-ai-center p-jc-center flex-column">
        <img src={image} alt="404" className="notFoundImg mb-4"/>
        <h2 className="text-center mb-3">Oops! Page not found!</h2>
        <p className="text-center mb-4">
          Looks like the page you're trying to visit dosen't exist. Please check
          the URL and try again.
        </p>
        <Link to="/">
          <i className="pi pi-home mr-1" /> Home
        </Link>
      </div>
    </>
  );
}