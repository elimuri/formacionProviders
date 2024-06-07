import { createContext } from "react";

export interface Context {
  hola: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export const UserContext = createContext<Context | undefined>(undefined);
