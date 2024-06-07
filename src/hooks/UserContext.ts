import { createContext } from "react";

export interface Context {
  gif: string;
}

export const UserContext = createContext<Context | undefined>(undefined);
