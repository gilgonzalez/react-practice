import { useState } from "react";

interface Props {
  //onAddCategory: React.Dispatch<React.SetStateAction<string[]>>;
  onNewCategory: (newCategory: string) => void;
}

const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    //onAddCategory((prevState) => [...prevState, inputValue]);
    //* De esta manera se emite el valor al padre
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="price"
        id="price"
        value={inputValue}
        className="mt-1 mb-1 block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
        placeholder="Add new category"
        onChange={({ target: { value } }) => setInputValue(value)}
      />
    </form>
  );
};

export default AddCategory;
