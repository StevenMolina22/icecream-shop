"use client";
import { createContext, useContext, useState } from "react";

type User = {
  name: string;
  setName: (name: string) => void;
};

const UserContext = createContext<User | null>(null);

// Provider:
const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook:
export const useUser = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserProfile must be used within a UserProvider");
  }

  return userContext;
};
export default UserContextProvider;
