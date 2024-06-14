import { EjemploSinContext } from "./ejemploSinContext/views/EjemploSinContext";
import { EjemploSinContextConHook } from "./ejemploSinContextConHook/views/EjemploSinContextConHook";
import { EjemploConContext } from "./ejemploConContext/views/EjemploConContext";
import { EjemploConContextConHook } from "./ejemploConContextConHook/views/EjemploConContextConHook";

export const App = () => {
  return <EjemploSinContext />;
  // return <EjemploSinContextConHook />;
  // return <EjemploConContext />;
  // return <EjemploConContextConHook />;
};
