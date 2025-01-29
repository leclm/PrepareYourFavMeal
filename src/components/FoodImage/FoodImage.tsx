import React from "react";
import styles from "./FoodImage.module.css";

type FoodImageProps = {
  src: string;
  alt?: string;
};

const FoodImage: React.FC<FoodImageProps> = ({ src, alt = "Food Image" }) => {
  return <img className={styles.image} src={src} alt={alt} />;
};

export default FoodImage;
