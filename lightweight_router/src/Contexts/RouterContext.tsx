import { useState, createContext, ReactElement } from "react";

export const RouterContext = createContext<any>(undefined);

export const RouterProvider = ({
  children,
}: {
  children: ReactElement<any, any>;
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        setCurrentPath,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};
