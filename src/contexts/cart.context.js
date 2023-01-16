import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
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

const removeCartItem = (currentCartItems, productTobeRemoved) => {
  const index = currentCartItems.findIndex(
    (product) => product.id === productTobeRemoved.id
  );

  if (index !== -1) {
    const productTobeUpdated = currentCartItems[index];
    if (+productTobeUpdated.quantity > 1) {
      return [
        ...currentCartItems.slice(0, index),
        {
          ...productTobeUpdated,
          quantity: +productTobeUpdated.quantity - 1,
        },
        ...currentCartItems.slice(index + 1),
      ];
    } else {
      return [
        ...currentCartItems.slice(0, index),
        ...currentCartItems.slice(index + 1),
      ];
    }
  }
  return [...currentCartItems];
};

const clearCartItem = (currentCartItems, cartItem) => {
  const index = currentCartItems.findIndex(
    (product) => product.id === cartItem.id
  );

  if (index !== -1) {
    return [
      ...currentCartItems.slice(0, index),
      ...currentCartItems.slice(index + 1),
    ];
  }
  return [...currentCartItems];
};

const calculateTotalQuantity = (items) => {
  return items.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
};

const calculateTotalPrice = (items) => {
  return items.reduce((accumulator, item) => {
    return accumulator + +item.quantity * +item.price;
  }, 0);
};

export const CartContexProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalQuantity(calculateTotalQuantity(cartItems));
  }, [cartItems]);
  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cartItems));
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (cartItem) => {
    setCartItems(clearCartItem(cartItems, cartItem));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    totalQuantity,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
