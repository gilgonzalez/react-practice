import { Gif, GifBasicInfo } from "../interface/GifAppInterface";

export const getGifs = async ({category, limit} : {category: string, limit: number}): Promise<GifBasicInfo[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIF_API_KEY}&lang=en&q=${category}&limit=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data.map((gif: Gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }));
  };