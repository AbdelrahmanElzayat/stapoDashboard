'use client'
import { createContext, useContext, useState, ReactNode } from "react";

// Define the context interface
interface MenuContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

// Create the context
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

// Create a provider component
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
