import React from "react";
import { useGifContext } from "../hooks/useGifContext";

export const LoginPage: React.FC = () => {
  const { gif, onClick } = useGifContext();

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <img src={gif} alt="" />

      <br />

      <button onClick={onClick}>Cambiar GIF</button>
    </>
  );
};
