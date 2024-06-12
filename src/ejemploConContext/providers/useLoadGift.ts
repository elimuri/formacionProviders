import { useEffect, useState } from "react";
import { getGif } from "../domain/services/getGif";

export const useLoadGift = () => {
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

  return { gif: currentGif, hasError, onLoad };
};
