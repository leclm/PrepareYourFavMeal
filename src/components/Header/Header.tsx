import React from "react";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style.header} data-testid="header">
      <h1>Prepare Your Fav Meal</h1>
      <h2>Take our quiz and select your favorite dish for each step!</h2>
    </header>
  );
};

export default Header;
