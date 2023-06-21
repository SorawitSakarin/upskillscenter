// AuthProvider.tsx
import React, { useState, useCallback, ReactNode, useEffect } from "react";
import CryptoJS from "crypto-js";
import { AuthContext } from "./auth-context";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const subDomain = window.location.hostname.split(".")[0];
  const secretKey = import.meta.env.VITE_APP_SECRET_KEY + subDomain;
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const userData = localStorage.getItem("userData");
    return !!userData;
  });

  const login = useCallback((userId: string, token: string) => {
    setIsLoggedIn(true);
    setToken(token);
    setUserId(userId);
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify({ userId, token }),
      secretKey
    ).toString();
    localStorage.setItem("userData", ciphertext);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const isJSON = (str: string) => {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    };

    const storeEncodedData = localStorage.getItem("userData") || "null";
    if (isJSON(storeEncodedData)) {
      const storedData = JSON.parse(storeEncodedData);
      if (storedData && storedData.token) {
        login(storedData.userId, storedData.token);
      }
    } else {
      const bytes = CryptoJS.AES.decrypt(storeEncodedData, secretKey);
      const storedData2 = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      if (storedData2 && storedData2.token) {
        login(storedData2.userId, storedData2.token);
      }
    }

    // const storeEncodedData = localStorage.getItem("userData") || "null";
  }, [login]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userId, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
