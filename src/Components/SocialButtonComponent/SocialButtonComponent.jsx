import React from "react";
import "./SocialButtonComponent.css";
import { Link } from "react-router-dom";

export default function SocialButtonComponent({icons}) {
  return (
    <div className="AA-social-btn">
        {icons.map((icon, index) => (
                <div className="AA-footer-btn" key={index}>
                    <Link to={""}>
                        <img src={icon.src} alt={icon.alt} />
                        </Link>
                </div>
            ))}
    </div>
  );
}
