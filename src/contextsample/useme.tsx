import { createContext, useContext, useState, type ReactNode } from "react";

const ValueContext = createContext();
//This is used to use the global values
export const useValue = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("Error putangina mo dapat na loob to ng ValueProvider");
  }
  return context;
};

//This is used inside the structure of react mean its inside the tree when building react website
export const ValueProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState("Hello World");
  return <ValueContext value={{ value, setValue }}>{children}</ValueContext>;
};
