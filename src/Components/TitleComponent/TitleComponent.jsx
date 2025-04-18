import "./TitleComponent.css";

export default function TitleComponent({title, descrption}) {
  return (
    <>
        <h3 className="fs-38 fw-700 MR-title">{title}</h3>
        <p className="fs-18 fw-400 MR-descrption">{descrption}</p>
    </>
  )
}
