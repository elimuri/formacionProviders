import React, { useEffect, useState } from "react";
import { getGif } from "../../domain/services/getGif";

export const LoginPage: React.FC = () => {
  const [currentGif, setCurrentGif] = useState<string | undefined>(undefined);

  const onLoad = async () => {
    setCurrentGif(undefined);
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
    <>
      <h1>LoginPage</h1>
      <hr />

      <img src={currentGif} alt="" />

      <br />

      <button onClick={handleClick}>Cambiar GIF</button>
    </>
  );
};
