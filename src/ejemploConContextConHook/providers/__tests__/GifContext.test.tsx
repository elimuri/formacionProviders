import { render, screen } from "@testing-library/react";
import * as getGif from "../../domain/services/getGif";
import { GifProvider } from "../GifProvider";
import { useGifs } from "../useGifs";
import userEvent from "@testing-library/user-event";

describe("Con el Context de GIFs", () => {
  it("si todavía no está listo el GIF a mostrar, se muestra un loader", async () => {
    render(
      <GifProvider>
        <TestComponent />
      </GifProvider>
    );

    expect(await screen.findByText("Cargando...")).toBeVisible();
  });

  it("si hay un error al obtener el GIF, se muestra un mensaje de error", async () => {
    jest.spyOn(getGif, "getGif").mockRejectedValue(422);

    render(
      <GifProvider>
        <TestComponent />
      </GifProvider>
    );

    expect(await screen.findByText("Ha habido un error")).toBeVisible();
  });

  it("los consumidores de este contexto pueden acceder al gif obtenido", async () => {
    jest.spyOn(getGif, "getGif").mockResolvedValue("aGIF");

    render(
      <GifProvider>
        <TestComponent />
      </GifProvider>
    );

    expect(await screen.findByText("aGIF")).toBeVisible();
  });

  it("los consumidores de este contexto pueden cambiar el gif obtenido, volviéndolo a pedir", async () => {
    jest
      .spyOn(getGif, "getGif")
      .mockResolvedValueOnce("aGIF1")
      .mockResolvedValueOnce("aGIF2");

    render(
      <GifProvider>
        <TestComponent />
      </GifProvider>
    );

    expect(await screen.findByText("aGIF1")).toBeVisible();

    userEvent.click(screen.getByRole("button", { name: "Cambiar GIF" }));

    expect(await screen.findByText("aGIF2")).toBeVisible();
  });
});

const TestComponent = () => {
  const { gif, onClick } = useGifs();
  return (
    <>
      <div>{gif}</div>
      <button onClick={onClick}>Cambiar GIF</button>
    </>
  );
};
