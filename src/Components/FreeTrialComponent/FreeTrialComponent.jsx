import React from "react";
import "./FreeTrialComponent.css";
import TitleComponent from "./../../Components/TitleComponent/TitleComponent";
import FreeTrialData from "../../Data/FreeTrialData";

export default function FreeTrialComponent() {
  return (
    <section className="px-161 pb-150">
      <div className="slider-container mb-80">
        <div className="AA-free-trial">
          <TitleComponent
            title={"Start your free trial today!"}
            descrption={
              "This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
            }
          />
          <button className="AA-free-btn fs-18 fw-600">
            Start a Free Trail
          </button>
        </div>
        {FreeTrialData.map((row, index) => (
          <div className="slider">
            {row?.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="slider-image"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
