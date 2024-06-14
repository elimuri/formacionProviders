import React, { useEffect, useState } from "react";
import { GifContext } from "./GifContext";
import { getGif } from "../domain/services/getGif";

interface Props {
  children: React.ReactNode;
}

export const GifProvider: React.FC<Props> = ({ children }) => {
  const [currentGif, setCurrentGif] = useState<string | undefined>(undefined);
  const [hasError, setHasError] = useState(false);

  const onLoad = async () => {
    try {
      setCurrentGif(undefined);
      setCurrentGif(await getGif());
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const handleClick = () => {
    onLoad();
  };

  if (hasError) {
    return <>Ha habido un error</>;
  }

  if (currentGif === undefined) {
    return <>Cargando...</>;
  }

  return (
    <GifContext.Provider value={{ gif: currentGif, onClick: handleClick }}>
      {children}
    </GifContext.Provider>
  );
};
