import { ReactElement, useContext, useEffect } from "react";
import { RouterContext } from "../Contexts/RouterContext";

interface RouterProps {
  path: string;
  children: ReactElement<any, any> | null;
}

const Route = ({
  path,
  children,
}: RouterProps): ReactElement<any, any> | null => {
  // state to track URL and force component to re-render on change
  const { setCurrentPath, currentPath } = useContext(RouterContext);

  useEffect(() => {
    // define callback as separate function so it can be removed later with cleanup function
    const onLocationChange = () => {
      // update path state to current window URL
      setCurrentPath(window.location.pathname);
    };

    // listen for popstate event
    window.addEventListener("popstate", onLocationChange);

    // clean up event listener
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
