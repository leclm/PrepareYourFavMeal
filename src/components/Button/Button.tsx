import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
}) => {
  return (
   <button onClick={onClick} className={disabled ? styles.disabled : styles.button} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
