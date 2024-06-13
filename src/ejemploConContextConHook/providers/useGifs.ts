import { useContext } from "react";
import { Context, GifContext } from "./GifContext";

export function useGifs(): Context {
  const userContext = useContext(GifContext);

  if (userContext === undefined) {
    throw new Error("useGifs must be used within a PlanesProvider");
  }

  return userContext;
}
