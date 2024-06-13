import React from "react";
import { GifContext } from "./GifContext";
import { useLoadGif } from "./useLoadGif";

interface Props {
  children: React.ReactNode;
}

export const GifProvider: React.FC<Props> = ({ children }) => {
  const { gif, hasError, onLoad } = useLoadGif();

  if (hasError) {
    return <>Ha habido un error</>;
  }

  if (gif === undefined) {
    return <>Cargando...</>;
  }

  return (
    <GifContext.Provider value={{ gif, onClick: onLoad }}>
      {children}
    </GifContext.Provider>
  );
};
