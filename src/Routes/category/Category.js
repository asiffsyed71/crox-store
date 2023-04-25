import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoriesContext } from "../../contexts/categories.context";
import "./Category.styles.scss";
import { useSelector } from "react-redux";
import { selectCategory } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const  categoriesMap  = useSelector(selectCategory)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className="category-container">
      <h2>
        <span className="title">{category.toUpperCase()}</span>
      </h2>
      <div className="preview">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Category;
