import React, { useEffect, useState } from "react";
import { getGif } from "../domain/services/getGif";

export const AboutPage: React.FC = () => {
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

  return (
    <>
      <h1>AboutPage</h1>
      <hr />

      <img src={currentGif} alt="" />

      <br />

      <button onClick={handleClick}>Cambiar GIF</button>
    </>
  );
};
