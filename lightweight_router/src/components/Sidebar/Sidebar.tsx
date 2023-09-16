import React, { PropsWithChildren } from "react";
import styles from "./Sidebar.module.css";
import Link from "../../Router/Link";
import { Icons } from "../../utils/Icons";
import { AllowedPaths } from "../../utils/types";

interface Props extends PropsWithChildren {
  menuHidden: boolean;
  setMenuHidden: (value: boolean) => void;
}

const Sidebar = ({ menuHidden, setMenuHidden }: Props) => {
  return (
    <nav className={`${styles.sideBar} ${menuHidden ? styles.hidden : ""}`}>
      <div className={`${styles.logo}`}>
        <div onClick={() => setMenuHidden(!menuHidden)}>
          <Icons.Menu fill="hsl(54, 100%, 63%)" />
        </div>
      </div>
      <ul>
        <li>
          <Link to={AllowedPaths.HOMEPAGE} activeClassName={styles.active}>
            <Icons.Home fill="hsl(54, 100%, 63%)" />
            {!menuHidden && "Home"}
          </Link>
        </li>
        <li>
          <Link to={AllowedPaths.PAGE1} activeClassName={styles.active}>
            <Icons.Server fill="hsl(54, 100%, 63%)" />
            {!menuHidden && "Page1"}
          </Link>
        </li>
        <li>
          <Link to={AllowedPaths.PAGE2} activeClassName={styles.active}>
            <Icons.Machine stroke="hsl(54, 100%, 63%)" />
            {!menuHidden && "Page2"}
          </Link>
        </li>
        <li>
          <Link to={AllowedPaths.PAGE3} activeClassName={styles.active}>
            <Icons.Chat stroke="hsl(54, 100%, 63%)" />
            {!menuHidden && "Page3"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
