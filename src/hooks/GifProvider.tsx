import React, { useEffect, useState } from "react";
import { GifContext } from "./GifContext";
import { getGif } from "../services/getGif";

interface Props {
  children: React.ReactNode;
}

export const GifProvider: React.FC<Props> = ({ children }) => {
  const [currentGif, setCurrentGif] = useState<string | undefined>(undefined);

  const onLoad = async () => {
    setCurrentGif(await getGif());
  };

  useEffect(() => {
    onLoad();
  }, []);

  const handleClick = () => {
    onLoad();
  };

  if (currentGif === undefined) {
    return <>Cargando...</>;
  }

  return (
    <GifContext.Provider value={{ gif: currentGif, onClick: handleClick }}>
      {children}
    </GifContext.Provider>
  );
};
