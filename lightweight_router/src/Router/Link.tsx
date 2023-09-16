import {
  ComponentPropsWithoutRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { RouterContext } from "../Contexts/RouterContext";

interface LinkProps extends ComponentPropsWithoutRef<"div"> {
  to: string;
  activeClassName?: string | undefined;
}

const Link = ({ to, className, activeClassName, ...rest }: LinkProps) => {
  const { currentPath } = useContext(RouterContext);
  const [isActive, setIsActive] = useState<boolean>(currentPath === to);
  useEffect(() => {
    setIsActive(currentPath === to);
  }, [currentPath, to]);
  const onClick = (event: any) => {
    // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // prevent full page reload
    event.preventDefault();
    // update url
    window.history.pushState({}, "", to);

    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <div
      onClick={onClick}
      className={`${className} ${
        isActive && activeClassName && activeClassName
      }`}
      {...rest}
    >
      <a href={to}>{rest.children}</a>
    </div>
  );
};

export default Link;
