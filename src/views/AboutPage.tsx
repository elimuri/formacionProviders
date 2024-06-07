import React from "react";
import { useUserContext } from "../hooks/useUserContext";

export const AboutPage: React.FC = () => {
  const { gif } = useUserContext();

  return (
    <>
      <h1>AboutPage</h1>
      <hr />

      <img src={gif} alt="" />
    </>
  );
};
