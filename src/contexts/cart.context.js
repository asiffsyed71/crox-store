import { createContext, useReducer } from "react";

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

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled user type: ${type} in userReducer`);
  }
};

export const CartContexProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, totalQuantity, totalPrice }, dispatchFn] =
    useReducer(cartReducer, INITIAL_CART_STATE);

  const updateCartReducer = (updatedCartItems) => {
    const totalQuantity = calculateTotalQuantity(updatedCartItems);
    const totalPrice = calculateTotalPrice(updatedCartItems);

    const payload = {
      cartItems: updatedCartItems,
      totalQuantity: totalQuantity,
      totalPrice: totalPrice,
    };
    dispatchFn({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: payload });
  };

  const addItemToCart = (productToAdd) => {
    const updatedCartItems = addCartItem(cartItems, productToAdd);
    updateCartReducer(updatedCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const updatedCartItems = removeCartItem(cartItems, productToRemove);
    updateCartReducer(updatedCartItems);
  };

  const clearItemFromCart = (cartItem) => {
    const updatedCartItems = clearCartItem(cartItems, cartItem);
    updateCartReducer(updatedCartItems);
  };

  const setIsCartOpen = (boolean) => {
    dispatchFn({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: boolean });
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
