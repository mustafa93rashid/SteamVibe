import "./FAQSectionComponent.css";
import { FAQData } from "../../Data/FAQData";
import TitleComponent from "../TitleComponent/TitleComponent";
import { useState , useRef, useEffect } from 'react';
import FAQCardComponent from './../FAQCardComponent/FAQCardComponent'

export default function FAQSectionComponent() {
  const groupedFAQData = FAQData.reduce((acc, curr, index) => {
    if (index % 4 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);
  
  return (
    <div className="px-161 pb-150">
      <div className="AA-title-section mb-80">
        <TitleComponent
          title={"Frequently Asked Questions"}
          descrption={
            "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          }
        />
        <button className="AA-ask-btn fs-18 fw-600">
          Ask a Question
        </button>
      </div>

      <div className="AA-FAQs">
        {groupedFAQData.map((group, groupKey) => (
        <div key={groupKey} className="AA-FAQ-group">
          {group.map((item, itemKey) => (
            <FAQCardComponent key={item.id} data={item} />
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}
