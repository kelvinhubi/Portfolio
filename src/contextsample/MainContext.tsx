/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";

type MainContentValue = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};
const MainContent = createContext<MainContentValue | null>(null);

export const useContent = () => {
  const context = useContext(MainContent);
  if (!context) {
    throw new Error("Error Context Used");
  }
  return context;
};

export const MainContentProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");

  return <MainContent value={{ name, setName }}>{children}</MainContent>;
};
