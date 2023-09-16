import React, { PropsWithChildren } from "react";
import styles from "./Main.module.css";

interface Props extends PropsWithChildren {
  menuHidden: boolean;
}
const Main = ({ children, menuHidden }: Props) => {
  return (
    <div className={`${styles.main}  ${menuHidden ? styles.menuHidden : ""}`}>
      {children}
    </div>
  );
};

export default Main;
