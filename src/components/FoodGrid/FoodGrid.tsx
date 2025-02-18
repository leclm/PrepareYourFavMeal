import FoodImage from "../FoodImage/FoodImage";
import style from "./FoodGrid.module.scss";

type FoodGridProps = {
  foodList: Array<{ strMealThumb: string; strMeal: string; }>;
  onSelect?: (image: { strMealThumb: string; strMeal: string; }) => void;
  selected?: { strMealThumb: string; strMeal: string } | null;
};

const FoodGrid: React.FC<FoodGridProps> = ({
  foodList,
  onSelect,
  selected,
}) => {
  return (
    <div className={style.grid}>
      {foodList.map((data, index) => (
        <FoodImage
          key={index}
          src={data.strMealThumb}
          alt={data.strMeal}
          onClick={() => onSelect && onSelect(data)}
          isSelected={selected?.strMealThumb === data.strMealThumb}
        />
      ))}
    </div>
  );
};

export default FoodGrid;
