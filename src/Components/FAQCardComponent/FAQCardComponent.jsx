import "./FAQCardComponent.css";
import plusIcon from "./../../assets/images/Faq/plus-icon.png";
import minusIcon from "./../../assets/images/Faq/minus-icon.png";

export default function FAQCardComponent({ data }) {
  return (
    <>
      <div className="AA-FAQ-full">
        <div className="AA-FAQ-card">
          <div className="AA-FAQ-num">
            <span className="fw-600 fs-20">{data.num}</span>
          </div>
          <div className="AA-FAQ-content">
            <h4 className="fw-500 fs-22">{data.question}</h4>
            <p className="fw-400 fs-18">{data.answer}</p>
          </div>
          <div className="AA-icons">
            <img src={plusIcon} alt="" />
          </div>
        </div>
        <div className="AA-line"></div>
      </div>
    </>
  );
}
