import React from "react";
import { useUserContext } from "../hooks/useUserContext";

export const LoginPage: React.FC = () => {
  const { hola, user } = useUserContext();

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      {hola}
      {JSON.stringify(user)}
    </>
  );
};
