export const getGif = async () => {
  const apiKey = "6kObtrgQMxPiLXwL0RzRUiiTTRaLWfwX";
  const peticion = await fetch(
    `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );

  const imagenData = await peticion.json();
  const imagen = imagenData.data.images.original.url;

  return imagen;
};
