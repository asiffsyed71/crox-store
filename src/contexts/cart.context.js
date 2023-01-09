import { createContext, useState } from "react";

export const CartContex = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
});

const addCartItem = (currentCartItems, productToBeAdded) => {
  // product structure {id,name,imageUrl,quantitiy}
  const index = currentCartItems.findIndex(
    (product) => product.id === productToBeAdded.id
  );
  if (index !== -1) {
    const productTobeUpdated = currentCartItems[index];
    return [
      ...currentCartItems.slice(0, index),
      {
        ...productTobeUpdated,
        quantity: +productTobeUpdated.quantity + 1,
      },
      ...currentCartItems.slice(index + 1),
    ];
  } else {
    return [...currentCartItems, { ...productToBeAdded, quantity: 1 }];
  }
};

const calculateTotalQuantity = (items) => {
  return items
    .map((item) => item.quantity)
    .reduce((accumulator, quantitiy) => {
      return accumulator + quantitiy;
    }, 0);
};

export const CartContexProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const totalQuantity = calculateTotalQuantity(cartItems);
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, totalQuantity };
  return <CartContex.Provider value={value}>{children}</CartContex.Provider>;
};
