import "animate.css";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

const HeroPage = () => {
  const params = useParams();
  const hero = useMemo(() => getHeroById(params.id!), [params.id]);

  if (!hero) {
    return <Navigate to="/DC-Comics" />;
  }
  return (
    <div className="page flex justify-center">
      <div className="rounded-xl w-64 h-96 flex-column  bg-black  content-center justify-center ">
        <img
          className="rounded-xl w-64 h-80 animate__animated animate__fadeInLeft"
          src={`../../../assets/heroes/${hero.id}.jpg`}
          alt=""
        />
        <p className="text-white text-center font-bold text-2xl mt-4">
          {hero.superhero}
        </p>
      </div>
    </div>
  );
};

export default HeroPage;
