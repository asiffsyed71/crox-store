import React, { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((productTitle) => {
        const products = categoriesMap[productTitle];
        return (
          <CategoryPreview
            key={productTitle}
            title={productTitle}
            products={products}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
