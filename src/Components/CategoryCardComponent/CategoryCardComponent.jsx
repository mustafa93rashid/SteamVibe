import "./CategoryCardComponent.css";
import icon from './../../assets/images/Categories/Icon.png'

export default function CategoryCardComponent({data}) {
  return (
    <div className="AA-categoryCard">
      <div className="AA-category-img">
        <div>
          <img className="AA-pb-3" src={data.img1} alt={""} />
          <img src={data.img2} alt={""} />
        </div>
        <div>
          <img className="AA-pb-3" src={data.img3} alt={""} />
          <img src={data.img4} alt={""} />
        </div>
      </div>
      <div className="AA-category-name">
        <h4 className="fs-18 fw-600">{data.categoryName}</h4>
        <img src={icon} alt="" />
      </div>
    </div>
  )
}
