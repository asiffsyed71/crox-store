import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./categories.style.scss";

const categories = [
  {
    id: 1,
    title: "HATS",
    imageUrl:
      "https://images.unsplash.com/photo-1552399230-e073362b3bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "JACKETS",
    imageUrl:
      "https://images.unsplash.com/photo-1551488831-68b4d0c92c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "SNEAKERS",
    imageUrl:
      "https://images.unsplash.com/photo-1527128296579-fce16948f060?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "WOMENS",
    imageUrl:
      "https://images.unsplash.com/photo-1610695997208-2b6479928d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "MENS",
    imageUrl:
      "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    route: "shop/mens",
  },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl,route }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} route={route} />
      ))}
    </div>
  );
};

export default Categories;
