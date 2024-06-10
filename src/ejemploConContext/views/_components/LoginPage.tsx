import React from "react";
import { useGifs } from "../../hooks/useGifs";

export const LoginPage: React.FC = () => {
  const { gif, onClick } = useGifs();

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
