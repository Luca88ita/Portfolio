import { PropsWithChildren } from "react";
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
          <Link
            to={AllowedPaths.HOMEPAGE}
            className={styles.link}
            activeClassName={styles.active}
            inactiveChildren={
              <>
                <Icons.Home fill="hsl(54, 100%, 63%)" />
                {!menuHidden && "Home"}
              </>
            }
          >
            <Icons.Home fill="hsl(121, 76%, 62%)" />
            {!menuHidden && "Home"}
          </Link>
        </li>
        <li>
          <Link
            to={AllowedPaths.PAGE1}
            className={styles.link}
            activeClassName={styles.active}
            inactiveChildren={
              <>
                <Icons.Server fill="hsl(54, 100%, 63%)" />
                {!menuHidden && "Server"}
              </>
            }
          >
            <Icons.Server fill="hsl(121, 76%, 62%)" />
            {!menuHidden && "Server"}
          </Link>
        </li>
        <li>
          <Link
            to={AllowedPaths.PAGE2}
            className={styles.link}
            activeClassName={styles.active}
            inactiveChildren={
              <>
                <Icons.Chat stroke="hsl(54, 100%, 63%)" />
                {!menuHidden && "Chat"}
              </>
            }
          >
            <Icons.Chat stroke="hsl(121, 76%, 62%)" />
            {!menuHidden && "Chat"}
          </Link>
        </li>
        <li>
          <Link
            to={AllowedPaths.PAGE3}
            className={styles.link}
            activeClassName={styles.active}
            inactiveChildren={
              <>
                <Icons.Support fill="hsl(54, 100%, 63%)" />
                {!menuHidden && "Support"}
              </>
            }
          >
            <Icons.Support fill="hsl(121, 76%, 62%)" />
            {!menuHidden && "Support"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
