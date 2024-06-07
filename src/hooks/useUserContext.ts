import { useContext } from "react";
import { Context, UserContext } from "./UserContext";

export function useUserContext(): Context {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error("usePlanes must be used within a PlanesProvider");
  }

  return userContext;
}
