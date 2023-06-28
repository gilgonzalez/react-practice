import { useEffect, useState } from "react";
import { getGifs } from "../api/getGifs";
import { GifBasicInfo } from "../interface/GifAppInterface";


export const useFetchGifs = (category: string) => {

const [gifs, setGifs] = useState<GifBasicInfo[]>();
  const [isLoading, setIsLoading] = useState(true);
  const fetchGifs = async () => {
    const newGifs = await getGifs({ category, limit: 6 });
    setGifs(newGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  return {
    gifs,
    isLoading,
  }
}