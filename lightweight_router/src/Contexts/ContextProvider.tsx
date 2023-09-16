import { RouterProvider } from "./RouterContext";

export const ContextProvider = ({ children }: { children: any }) => {
  return (
    <>
      <RouterProvider>{children}</RouterProvider>
    </>
  );
};
