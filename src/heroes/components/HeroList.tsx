import { useMemo } from "react";
import { Publisher } from "../data/heroes";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }: { publisher: Publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {heroes.map((hero) => (
        <HeroCard hero={hero} key={hero.id} />
      ))}
    </div>
  );
};

export default HeroList;
