import { useContext } from "react";
import { Context, GifContext } from "./GifContext";

export function useGifContext(): Context {
  const userContext = useContext(GifContext);

  if (userContext === undefined) {
    throw new Error("usePlanes must be used within a PlanesProvider");
  }

  return userContext;
}
