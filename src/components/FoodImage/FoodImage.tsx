import React from "react";
import styles from "./FoodImage.module.scss";

type FoodImageProps = {
  src: string;
  alt: string;
  isSelected?: boolean;
  onClick?: () => void;
};

const FoodImage: React.FC<FoodImageProps> = ({
  src,
  alt,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={styles.imageContainer}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (onClick) {
            onClick();
          }
        }
      }}
    >
      <img
        className={`${styles.image} ${isSelected ? styles.selected : ""}`}
        src={src}
        alt={alt}
        onClick={onClick}
        tabIndex={0}
        data-testid="food-image"
      />
      <p className={`${styles.sub} ${isSelected ? styles.selectedSub : ""}`}>
        {alt}
      </p>
    </div>
  );
};

export default FoodImage;
