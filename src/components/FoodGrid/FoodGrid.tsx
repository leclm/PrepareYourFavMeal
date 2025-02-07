import FoodImage from "../FoodImage/FoodImage";
import style from "./FoodGrid.module.scss";

type FoodGridProps = {
  foodList: Array<string>;
  onSelect?: (url: string) => void;
  selected?: string | null;
};

const FoodGrid: React.FC<FoodGridProps> = ({
  foodList,
  onSelect,
  selected,
}) => {
  return (
    <div className={style.grid}>
      {foodList.map((src, index) => (
        <FoodImage
          key={index}
          src={src}
          onClick={() => onSelect && onSelect(src)}
          isSelected={selected === src}
        />
      ))}
    </div>
  );
};

export default FoodGrid;
