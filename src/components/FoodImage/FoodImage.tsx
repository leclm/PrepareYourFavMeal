import React from "react";
import styles from "./FoodImage.module.scss";

type FoodImageProps = {
  src: string;
  isSelected?: boolean;
  onClick?: () => void;
};

const FoodImage: React.FC<FoodImageProps> = ({
  src,
  onClick,
  isSelected,
}) => {
  return (
    <img
      className={`${styles.image} ${isSelected ? styles.selected : ""}`}
      src={src}
      alt="Food Image"
      onClick={onClick}
      data-testid="food-image"
    />
  );
};

export default FoodImage;
