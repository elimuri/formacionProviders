import { act, renderHook, waitFor } from "@testing-library/react";
import { useLoadGif } from "../useLoadGif";
import * as gifService from "../../domain/services/getGif";

describe("useLoadGif", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should load the gif successfully", async () => {
    const mockGifUrl = "https://example.com/gif.gif";
    jest.spyOn(gifService, "getGif").mockResolvedValue(mockGifUrl);

    const { result } = renderHook(useLoadGif);

    await waitFor(() => expect(result.current.gif).toBe(mockGifUrl));
    expect(result.current.hasError).toBe(false);
    expect(gifService.getGif).toHaveBeenCalledTimes(1);
  });

  it("should handle error when loading the gif", async () => {
    jest
      .spyOn(gifService, "getGif")
      .mockRejectedValue(new Error("Failed to load gif"));

    const { result } = renderHook(useLoadGif);

    await waitFor(() => expect(result.current.hasError).toBe(true));
    expect(result.current.gif).toBeUndefined();
    expect(gifService.getGif).toHaveBeenCalledTimes(1);
  });

  it("should get new gif", async () => {
    const mockGifUrl = "https://example.com/gif.gif";
    jest.spyOn(gifService, "getGif").mockResolvedValue(mockGifUrl);

    const { result } = renderHook(useLoadGif);

    await act(() => result.current.onLoad());

    await waitFor(() => expect(result.current.gif).toBe(mockGifUrl));
    expect(result.current.hasError).toBe(false);
    expect(gifService.getGif).toHaveBeenCalledTimes(2);
  });
});
