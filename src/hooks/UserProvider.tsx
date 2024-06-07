import React from "react";
import { UserContext } from "./UserContext";

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const user = {
    id: 123,
    name: "elisa",
    email: "elisa@hola.com",
  };

  return (
    <UserContext.Provider value={{ hola: "mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};
