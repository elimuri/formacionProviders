import React from "react";
import { useGifContext } from "../hooks/useGifContext";

export const HomePage: React.FC = () => {
  const { gif, onClick } = useGifContext();

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
