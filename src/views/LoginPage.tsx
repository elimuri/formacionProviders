import React from "react";
import { useUserContext } from "../hooks/useUserContext";

export const LoginPage: React.FC = () => {
  const { gif } = useUserContext();

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <img src={gif} alt="" />
    </>
  );
};
