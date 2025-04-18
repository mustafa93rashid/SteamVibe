import "./FAQCardComponent.css";
import plusIcon from "./../../assets/images/Faq/plus-icon.png";
import minusIcon from "./../../assets/images/Faq/minus-icon.png";
import { useState, useEffect } from "react";

export default function FAQCardComponent({ data }) {
   let [isOpen, setIsOpen] = useState(false);
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

   // Function to toggle the visibility of the last three cards
   const toggleOpenCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="AA-FAQ-full">
        <div className={`AA-FAQ-card ${isOpen ? '' : 'center-row'}`}>
          <div className="AA-FAQ-num">
            <span className="fw-600 fs-20">{data.num}</span>
          </div>
          <div className="AA-FAQ-content">
            <h4 className="fw-500 fs-22">{data.question}</h4>
            {(isSmallScreen == false && isOpen) ? <p className="fw-400 fs-18">{data.answer}</p> : <></>}
          </div>
          <div className="AA-icons">
            {!isOpen ? <img src={plusIcon} alt="" onClick={toggleOpenCard} /> : <img src={minusIcon} alt="" onClick={toggleOpenCard} /> }
            
          </div>
        </div>
        {(isSmallScreen == true && isOpen) ? <p className="fw-400 fs-18 p-10">{data.answer}</p> : <></>}
        <div className="AA-line"></div>
      </div>
    </>
  );
}
