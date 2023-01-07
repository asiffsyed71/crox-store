import { createContext, useState, useEffect } from "react";
import {
  authStateChanged,
  createUserDocFromAuth,
} from "../utils/firebase.util";

//actual context values that would be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

///provider component

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
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
