import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./categories.style.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Categories;
