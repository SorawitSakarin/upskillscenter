import { useState, useCallback, useRef, useEffect } from "react";

interface UseHttpClientProps {
  isLoading: boolean;
  error: any;
  sendRequest: (url: string, method?: string, body?: any, headers?: HeadersInit) => Promise<any>;
  clearError: () => void;
}

export const useHttpClient = (): UseHttpClientProps => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(async (
    url: string,
    method: string = "GET",
    body: any = null,
    headers: HeadersInit = {}
  ) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
        signal: httpAbortCtrl.signal,
      });

      const responseData = await response.json();

      activeHttpRequests.current = activeHttpRequests.current.filter(
        (reqCtrl) => reqCtrl !== httpAbortCtrl
      );

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setIsLoading(false);
      return responseData;
    } catch (err:any) {
      if (err.message !== "The user aborted a request.") {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    }
  }, []);

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
