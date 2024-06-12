import { useContext } from "react";
import { Context, GifContext } from "./GifContext";

export function useGifs(): Context {
  const gifsContext = useContext(GifContext);

  if (gifsContext === undefined) {
    throw new Error("useGifs must be used within a PlanesProvider");
  }

  return gifsContext;
}
