import React from "react";
import Categories from "../../components/categories/Categories";


const Home = () => {
    const categories = [
        {
          id: 1,
          title: "HATS",
          imageUrl: "https://images.unsplash.com/photo-1552399230-e073362b3bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 2,
          title: "JACKETS",
          imageUrl: "https://images.unsplash.com/photo-1551488831-68b4d0c92c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 3,
          title: "SNEAKERS",
          imageUrl: "https://images.unsplash.com/photo-1527128296579-fce16948f060?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 4,
          title: "WOMENS",
          imageUrl: "https://images.unsplash.com/photo-1610695997208-2b6479928d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        },
        {
          id: 5,
          title: "MENS",
          imageUrl: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
      ];
    
      return (
      <div>
          <Categories categories={categories} />
      </div>
      )
};

export default Home;
