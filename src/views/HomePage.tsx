import React from "react";
import { useGifs } from "../hooks/useGifs";

export const HomePage: React.FC = () => {
  const { gif, onClick } = useGifs();

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
