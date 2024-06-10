import React from "react";
import { useObtenerGif } from "../../hooks/useObtenerGif";

export const AboutPage: React.FC = () => {
  const { gif, onClick } = useObtenerGif();

  return (
    <>
      <h1>AboutPage</h1>
      <hr />

      <img src={gif} alt="" />

      <br />

      <button onClick={onClick}>Cambiar GIF</button>
    </>
  );
};
