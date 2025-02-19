import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  tabIndex?: number;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  tabIndex = 0,
}) => {
  return (
    <button
      onClick={onClick}
      className={disabled ? styles.disabled : styles.button}
      disabled={disabled}
      tabIndex={tabIndex}
      data-testid="button"
    >
      {text}
    </button>
  );
};

export default Button;
