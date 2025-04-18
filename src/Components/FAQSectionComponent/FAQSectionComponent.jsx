import "./FAQSectionComponent.css";
import { FAQData } from "../../Data/FAQData";
import TitleComponent from "../TitleComponent/TitleComponent";
import { useState, useRef, useEffect } from "react";
import FAQCardComponent from "./../FAQCardComponent/FAQCardComponent";

export default function FAQSectionComponent() {
  const currentData = FAQData;

  // State to track the current screen size
  let [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992); // Adjust breakpoint as needed

  // Function to handle window resize and update screen size state
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992); // Adjust breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupFAQData = (data) => {
    return data.reduce((acc, curr, index) => {
      // Check if the current index is divisible by 4
      if (index % 4 === 0) {
        // If yes, push a new group containing the current item
        acc.push([curr]);
      } else {
        // If not, push the current item into the last group
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, []);
  };

  const groupedFAQData = isSmallScreen
  ? groupFAQData(FAQData.slice(0, -2)) // Remove last two items for small screens
  : groupFAQData(FAQData); 

  return (
    <section className="px-161 pb-150">
      <div className="AA-title-section mb-80">
        <TitleComponent
          title={"Frequently Asked Questions"}
          descrption={
            "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          }
        />
        <button className="AA-ask-btn fs-18 fw-600">Ask a Question</button>
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
    </section>
  );
}
