import React, { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const  categoriesMap  = useSelector(selectCategoriesMap)
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
