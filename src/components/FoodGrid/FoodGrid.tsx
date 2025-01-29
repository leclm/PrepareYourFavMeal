import React from "react";
import FoodImage from "../FoodImage/FoodImage";
import styles from "./FoodGrid.module.css";

type FoodGridProps = {
  images: string[];
};

const FoodGrid: React.FC<FoodGridProps> = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images.map((src) => (
        <FoodImage key={src} src={src} />
      ))}
    </div>
  );
};

export default FoodGrid;