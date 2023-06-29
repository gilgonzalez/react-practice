import { Navigate, Route, Routes } from "react-router-dom";
import GifApp from "../../GifApp";
import { Navbar } from "../../general/Navbar";
import MarvelPage from "../pages/ComicPage";
import HeroPage from "../pages/HeroPage";
import SearchPage from "../pages/SearchPage";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/:publisher" element={<MarvelPage />} />
        <Route path="/hero/:id" element={<HeroPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/gifs/*" element={<GifApp />} />
        <Route path="/" element={<Navigate to="/comic/DC-Comics" />} />
      </Routes>
    </>
  );
};

export default HeroesRoutes;
