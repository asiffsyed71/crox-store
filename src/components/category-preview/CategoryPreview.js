import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import "./CategoryPreview.styles.scss";
import { useSelector } from "react-redux";
import { selectIsCategoriesLoading } from "../../store/categories/category.selector";
import Spinner from "../spinner/spinner.component";
import { Fragment } from "react";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectIsCategoriesLoading);
  return (
    <div className="category-preview-container">
   { isLoading ? <Spinner />:(
      <Fragment>
        <h2>
          <Link to={title}>
            <span className="title">{title.toUpperCase()}</span>
          </Link>
        </h2>
        <div className="preview">
          {products
            .filter((_, index) => index < 4)
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      </Fragment>
      )}
    </div>
  );
};

export default CategoryPreview;
