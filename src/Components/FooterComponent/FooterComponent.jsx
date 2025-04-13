import React from "react";
import "./FooterComponent.css";
import SocialButtonComponent from "../SocialButtonComponent/SocialButtonComponent"
import faceIcon from './../../assets/images/Footer/facebook.png'
import twitterIcon from './../../assets/images/Footer/twitter.png'
import linkdenIcon from './../../assets/images/Footer/linkedin.png'
import { Link } from "react-router-dom";

export default function FooterComponent() {

    const socialIcons = [
        { src: faceIcon, alt: 'Facebook Link' },
        { src: twitterIcon, alt: 'Twitter Link' },
        { src: linkdenIcon, alt: 'LinkedIn Link' },
    ];

  return (
    <footer className="px-161">
      <div className="footerTopPart">
        <div className="AA-col">
          <h5 className="fs-20 fw-600">Home</h5>
          <ul>
            {
                ["Categories", "Devices","Pricing","FAQ"].map((field) => (
                    <li key={field}>
                        <Link to={""} className="fs-18 fw-500">{field}</Link>
                    </li>
                ))
            }
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20 fw-600">Movies</h5>
          <ul>
            {
                ["Gernes", "Trending","New Release","Popular"].map((field) => (
                    <li key={field}>
                        <Link to={""} className="fs-18 fw-500">{field}</Link>
                    </li>
                ))
            }
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20  fw-600">Shows</h5>
          <ul>
            {
                ["Gernes", "Trending","New Release","Popular"].map((field) => (
                    <li key={field}>
                        <Link to={""} className="fs-18 fw-500">{field}</Link>
                    </li>
                ))
            }
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20 fw-600">Support</h5>
          <ul>
            <li>
              <Link to={""} className="fs-18 fw-500">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20 fw-600">Subscription</h5>
          <ul>
            {
                ["Plans", "Features"].map((field) => (
                    <li key={field}>
                        <Link to={""} className="fs-18 fw-500">{field}</Link>
                    </li>
                ))
            }
          </ul>
        </div>
        <div className="AA-col">
          <h5 className="fs-20 fw-600">Connect With Us</h5>
            <SocialButtonComponent icons={socialIcons} />
        </div>
      </div>
      <div className="footerBottomPart">
        <span className="fs-18 fw-400"> @2023 streamvib, All Rights Reserved </span>
        <ul className="privacy-part">
            <li>
                <Link to={""} className="fs-18 fw-400"> Terms of Use </Link>
            </li>
            <li> | </li>
            <li>
                <Link to={""} className="fs-18 fw-400">  Privacy Policy </Link> 
            </li>
            <li> | </li>
            <li>
                <Link to={""} className="fs-18 fw-400">  Cookie Policy </Link>
            </li>
          </ul>
      </div>
    </footer>
  );
}
