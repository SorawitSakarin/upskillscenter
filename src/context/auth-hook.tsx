import { useState, useCallback, useEffect } from 'react';


interface UseAuthReturnType {
  userId: string | null;
  token: string | null;
  login: (uid: string, token: string) => void;
  logout: () => void;
}

export const useAuth = (): UseAuthReturnType => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const login = useCallback((uid: string, token: string) => {
    setToken(token);
    setUserId(uid);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
      }),
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData") || "null");
    if (
      storedData &&
      storedData.token 
    ) {
      login(
        storedData.userId,
        storedData.token
      );
    }
  }, [login]);


  return { token, login, logout, userId };
};
