import "./CategoriesComponent.css";
import { CategoriesData } from "../../Data/CategoriesData";
import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import CategoryCardComponent from "../../Components/CategoryCardComponent/CategoryCardComponent";

export default function CategoriesComponent() {
  return (
    <div className="px-161">
      <TitleComponent
        title={"Explore our wide variety of categories"}
        descrption={
          "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        }
      />
      {CategoriesData.map((item, key) => (
        <CategoryCardComponent data={item} />
      ))}
    </div>
  );
}
