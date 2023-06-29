import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifList from "./components/GifList";

const GifApp = () => {
  const [categories, setCategories] = useState<Array<string>>([
    "Rick and Morty",
    "Los Simpsons",
  ]);
  //*AQUI, ADDCATEGORY RECIBE DEL HIJO EL VALOR Y ASI SETEA LAS CATEGORIAS
  const addCategory = (newCategory: string) => {
    if (
      categories.find(
        (category) =>
          category.toLocaleLowerCase() === newCategory.toLocaleLowerCase()
      )
    ) {
      alert("This category already exists");
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="page bg-slate-500 w-full">
      {/* <button className="btn btn-blue" onClick={addCategory}>
        Add Category
      </button> */}
      <h1 className="text-3xl font-bold underline text-center mt-6 mb-3">
        GIF FINDER
      </h1>
      {/** AQUI ES DONDE EL PADRE RECIBE EL VALOR DEL CHILD */}
      <AddCategory onNewCategory={addCategory} />
      {categories.map((category) => (
        <GifList category={category} key={category} />
      ))}
    </div>
  );
};

export default GifApp;
