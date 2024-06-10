import { useEffect, useState } from "react";
import { getGif } from "../domain/services/getGif";

export const useObtenerGif = () => {
  const [currentGif, setCurrentGif] = useState<string | undefined>(undefined);

  const onLoad = async () => {
    setCurrentGif(undefined);
    setCurrentGif(await getGif());
  };

  useEffect(() => {
    onLoad();
  }, []);

  const isLoading = currentGif === undefined;

  const handleClick = () => {
    onLoad();
  };

  return {
    gif: currentGif,
    isLoading,
    onClick: handleClick,
  };
};
