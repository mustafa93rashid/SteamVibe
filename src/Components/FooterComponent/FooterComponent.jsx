import React from "react";
import "./FooterComponent.css";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <footer className="px-161">
      <div className="footerTopPart">
        <div className="AA-col">
          <h5 className="fs-20">Home</h5>
          <ul>
            <li>
              <Link to={""}>Categories</Link>
            </li>
            <li>
              <Link to={""}>Devices</Link>
            </li>
            <li>
              <Link to={""}>Pricing</Link>
            </li>
            <li>
              <Link to={""}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20">Movies</h5>
          <ul>
            <li>
              <Link to={""}>Gernes</Link>
            </li>
            <li>
              <Link to={""}>Trending</Link>
            </li>
            <li>
              <Link to={""}>New Release</Link>
            </li>
            <li>
              <Link to={""}>Popular</Link>
            </li>
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20">Shows</h5>
          <ul>
            <li>
              <Link to={""}>Gernes</Link>
            </li>
            <li>
              <Link to={""}>Trending</Link>
            </li>
            <li>
              <Link to={""}>New Release</Link>
            </li>
            <li>
              <Link to={""}>Popular</Link>
            </li>
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20">Support</h5>
          <ul>
            <li>
              <Link to={""}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20">Subscription</h5>
          <ul>
            <li>
              <Link to={""}>Plans</Link>
            </li>
            <li>
              <Link to={""}>Features</Link>
            </li>
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20">Connect With Us</h5>
        </div>
      </div>
      <div className="footerBottomPart">
        <span> @2023 streamvib, All Rights Reserved </span>
        <div>
          <Link to={""}> Terms of Use </Link>
          <Link to={""}> | Privacy Policy </Link>
          <Link to={""}> | Cookie Policy </Link>
        </div>
      </div>
    </footer>
  );
}
