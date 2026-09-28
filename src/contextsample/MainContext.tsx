import { createContext, useContext, useState } from "react";

const MainContent = createContext();

export const useContent = () => {
  const context = useContext(MainContent);
  if (!context) {
    throw new Error("Error Context Used");
  }
  return context;
};

export const MainContentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("");

  return <MainContent value={{ name, setName }}>{children}</MainContent>;
};
