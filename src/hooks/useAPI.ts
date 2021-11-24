import { useState, useEffect } from 'react';

const STAGE_API_HOST = process.env.NEXT_PUBLIC_API_HOST;

const fetcher = (url: RequestInfo, init?: RequestInit) => {
  const response = fetch(`${STAGE_API_HOST}${url}`, init);
  return response;
};

interface APIResponse<T> {
  data?: T;
  isLoading: boolean;
}

function useAPI<T>(url: RequestInfo): APIResponse<T> {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetcher(url, {
          method: 'GET',
          headers: new Headers({
            Authorization: `Bearer ${accessToken}`,
          }),
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [accessToken, url]);

  return { data, isLoading };
}

export default useAPI;
