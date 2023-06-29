import { useFetchGifs } from "../hooks/useFetchGifs";
import GifCard from "./GifCard";
import "./Items.css";

const GifList = ({ category }: { category: string }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h3 className="font-bold mt-5">{category}</h3>
          <div className="list mt-2">
            {gifs?.map((gif) => (
              <GifCard gif={gif} key={gif.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default GifList;
