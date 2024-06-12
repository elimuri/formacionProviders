import { EjemploConContext } from "./ejemploConContext/views/EjemploConContext";
import { EjemploSinContext } from "./ejemploSinContext/views/EjemploSinContext";
import { EjemploSinContextConHook } from "./ejemploSinContextConHook/views/EjemploSinContextConHook";

export const App = () => {
  return <EjemploConContext />;
  // return <EjemploSinContext />;
  return <EjemploSinContextConHook />;
};
