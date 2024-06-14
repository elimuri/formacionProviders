import { createContext } from "react";

export interface Context {
  gif: string;
  onClick: () => void;
}

export const GifContext = createContext<Context | undefined>(undefined);
