import { useParams } from "react-router-dom";
import HeroList from "../components/HeroList";
import { Publisher } from "../data/heroes";

type Params = {
  publisher: Publisher;
};

const ComicPage = () => {
  const params = useParams<Params>();
  return (
    <div className="page">
      <h1 className="text-center text-xl font-bold border-b-2 border-zinc-800">
        {params.publisher?.toUpperCase()}
      </h1>
      <HeroList publisher={params.publisher as Publisher} />
    </div>
  );
};

export default ComicPage;
