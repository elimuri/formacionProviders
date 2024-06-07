import React from "react";
import { useUserContext } from "../hooks/useUserContext";

export const HomePage: React.FC = () => {
  const { gif } = useUserContext();

  return (
    <>
      <h1>HomePage</h1>
      <hr />

      <img src={gif} alt="" />
    </>
  );
};
