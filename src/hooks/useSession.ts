import { useQuery } from '@apollo/client';
import getUser from '@/graphql/getUser';

interface SessionReturn {
  loggedOut: boolean;
  isLoaded: boolean;
}

function useSession(): SessionReturn {
  const { loading, data } = useQuery(getUser);
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

  const isLoaded = Boolean(!loading && accessToken);
  const loggedOut = data === undefined || data?.me === null;

  return {
    loggedOut,
    isLoaded,
  };
}

export default useSession;
