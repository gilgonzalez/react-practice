import { Link } from "react-router-dom";
import { Hero } from "../data/heroes";

const HeroCard = ({ hero }: { hero: Hero }) => {
  console.log(hero);
  return (
    <div className="group bg-slate-700 p-4  transition duration-500 rounded-t-lg hover:bg-slate-100">
      <h2 className="text-xl transition group-hover:text-black duration-500  text-white text-center mb-4">
        {hero.superhero}
      </h2>
      <img src={`assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
      <p className="text-white font-mono group-hover:text-black duration-500 text-center mt-4">
        {hero.alter_ego}
      </p>
      <Link to={`/hero/${hero.id}`}> Mas...</Link>
    </div>
  );
};

export default HeroCard;
