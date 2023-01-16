import { createContext, useEffect, useState } from "react";
// import {SHOP_DATA} from '../shop-data';
import { getCollectionAndDocuments } from "../utils/firebase.util";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }) => {
  //   useEffect(() => {
  //   addCollectionAndDocuments('collections', SHOP_DATA);
  // }, []);  

  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments('collections');
      setCategoriesMap(categoryMap)
    };
    getCategoriesMap();
  }, []);
  
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
