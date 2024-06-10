import React from "react";
import { useObtenerGif } from "../../hooks/useObtenerGif";

export const HomePage: React.FC = () => {
  const { gif, onClick } = useObtenerGif();

  return (
    <>
      <h1>HomePage</h1>
      <hr />

      <img src={gif} alt="" />

      <br />

      <button onClick={onClick}>Cambiar GIF</button>
    </>
  );
};
