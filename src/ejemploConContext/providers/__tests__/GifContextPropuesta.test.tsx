import { render, screen } from "@testing-library/react";
import { GifProvider } from "../GifProvider";
import * as allUseLoadGift from "../useLoadGift";

describe("Con el Context de GIFs", () => {
  it("si todavía no está listo el GIF a mostrar, se muestra un loader", async () => {
    jest.spyOn(allUseLoadGift, "useLoadGift").mockReturnValue({
      gif: undefined,
      hasError: false,
      onLoad: jest.fn(),
    });

    render(
      <GifProvider>
        contenido
      </GifProvider>
    );

    expect(await screen.findByText("Cargando...")).toBeVisible();
  });

  it("si hay un error al obtener el GIF, se muestra un mensaje de error", async () => {
    jest.spyOn(allUseLoadGift, "useLoadGift").mockReturnValue({
      gif: undefined,
      hasError: true,
      onLoad: jest.fn(),
    });

    render(
      <GifProvider>
        contenido
      </GifProvider>
    );

    expect(await screen.findByText("Ha habido un error")).toBeVisible();
  });

  it("los consumidores de este contexto pueden acceder al gif obtenido", async () => {
    jest.spyOn(allUseLoadGift, "useLoadGift").mockReturnValue({
      gif: "aGIF",
      hasError: false,
      onLoad: jest.fn(),
    });

    render(
      <GifProvider>
        contenido
      </GifProvider>
    );

    expect(await screen.findByText("contenido")).toBeVisible();
  });
});
