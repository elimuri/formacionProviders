import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { getGif } from "../services/getGif";

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [currentGif, setCurrentGif] = useState<string | undefined>(undefined);

  useEffect(() => {
    const onLoad = async () => {
      setCurrentGif(await getGif());
    };

    onLoad();
  }, []);

  if (currentGif === undefined) {
    return <>Cargando...</>;
  }

  return (
    <UserContext.Provider value={{ gif: currentGif }}>
      {children}
    </UserContext.Provider>
  );
};
