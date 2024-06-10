import { useEffect, useState } from "react";
import { getGif } from "../domain/services/getGif";

export const useObtenerGif = () => {
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

  return {
    gif: currentGif,
    onClick: handleClick,
  };
};
