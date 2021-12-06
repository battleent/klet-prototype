import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import getUser from '@/graphql/getUser';
interface SessionReturn {
  loggedOut: boolean;
  isLoaded: boolean;
}

function useSession(): SessionReturn {
  const { loading, data } = useQuery(getUser);
  const [isLoaded, setIsLoaded] = useState(false);

  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  const tokenRef = useRef(accessToken);

  useEffect(() => {
    if (accessToken && !loading) {
      tokenRef.current = accessToken;
      setIsLoaded(true);
    }
  }, [accessToken, loading]);

  const isLoggedOut = () => {
    if (loading) return undefined;
    return data === undefined || data?.me === null;
  };

  const loggedOut = Boolean(isLoggedOut());

  return {
    loggedOut,
    isLoaded,
  };
}

export default useSession;
