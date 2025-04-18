import React from "react";
import "./FreeTrialComponent.css";
import TitleComponent from "./../../Components/TitleComponent/TitleComponent";

export default function FreeTrialComponent() {
  return (
    <section className="px-161 pb-150">
      <div className="AA-free-trial mb-80">
        <TitleComponent
          title={"Start your free trial today!"}
          descrption={
            "This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
          }
        />
        <button className="AA-free-btn fs-18 fw-600">Start a Free Trail</button>
      </div>
    </section>
  );
}
