import { createContext } from 'react';

// Define the AuthContext type
interface AuthContextType {
  isLoggedIn: boolean;
  userId: string | null;
  token: string | null;
  login: (userId: string, token: any) => void;
  logout: () => void;
}

// Create the AuthContext with the defined type
export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});