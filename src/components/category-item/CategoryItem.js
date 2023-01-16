import React from "react";
import "./CategoryItem.style.js";
import {
  BackgroundImage,
  Body,
  CategoryContainer,
} from "./CategoryItem.style.js";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();

  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={() => navigate(route)}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
