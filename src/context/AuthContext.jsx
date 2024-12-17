/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

// Step 1: Create the context
const AuthContext = createContext();

// Step 2: Create the provider
export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Step 3: Create a custom hook to use the context easily
export const useAuth = () => useContext(AuthContext);
