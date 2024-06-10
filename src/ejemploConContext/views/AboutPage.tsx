import React from "react";
import { useGifs } from "../hooks/useGifs";

export const AboutPage: React.FC = () => {
  const { gif, onClick } = useGifs();

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
