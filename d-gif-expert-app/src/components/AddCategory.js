import React, { useState } from "react";
import PropTypes from "prop-types";

const CONSTANT_EMPTY_VALUE = "";

const AddCategory = ({ setCategories }) => {
  const [newCategory, setNewCategory] = useState(CONSTANT_EMPTY_VALUE);

  const submitHandler = (event) => {
    event.preventDefault();
    if (newCategory.trim().length > 2) {
      setCategories((categories) => [newCategory, ...categories]);
      setNewCategory(CONSTANT_EMPTY_VALUE);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => {
          console.log("calling set = ", e.target.value);
          setNewCategory(e.target.value);
        }}
        value={newCategory}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
