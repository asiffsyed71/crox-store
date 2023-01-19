import { createContext, useEffect, useReducer } from "react";
import {
  authStateChanged,
  createUserDocFromAuth,
} from "../utils/firebase.util";

//actual context values that would be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const INITIAL_STATE = {
  currentUser: null,
};

//action types

const ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

//reducer function
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled user type: ${type} in userReducer`);
  }
};

///provider component

export const UserProvider = ({ children }) => {
  const [state, dispatchFn] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setCurrentUser = (value) => {
    dispatchFn({ type: ACTION_TYPES.SET_CURRENT_USER, payload: value });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribeFn = authStateChanged((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribeFn;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
