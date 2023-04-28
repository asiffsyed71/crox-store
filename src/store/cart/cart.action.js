import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer.util";

export const setIsCartOpen = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};

export const addCartItem = (currentCartItems, productToBeAdded) => {
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

export const removeCartItem = (currentCartItems, productTobeRemoved) => {
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

export const clearCartItem = (currentCartItems, cartItem) => {
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

export const addItemToCart = (cartItems, productToAdd) => {
  const updatedCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const updatedCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const clearItemFromCart = (cartItems, cartItem) => {
  const updatedCartItems = clearCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};
