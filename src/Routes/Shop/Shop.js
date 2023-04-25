import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCollectionAndDocuments } from "../../utils/firebase.util";
import { setCategoriesMap } from "../../store/categories/category.action";


const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments('collections');
      dispatch(setCategoriesMap(categoryMap))
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
    
  );
};

export default Shop;
