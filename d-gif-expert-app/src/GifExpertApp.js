import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

const categoriesTemplate = ["action"];

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  const addCategoryHandler = () => {
    setCategories([...categories, `category_${Math.random()}`]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <button onClick={addCategoryHandler}>Add New</button>

      <ul>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
