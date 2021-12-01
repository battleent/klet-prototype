import { useQuery } from '@apollo/client';
import getUser from '@/graphql/getUser';

interface SesssionReturn {
  accessToken: string | null;
  loggedOut: boolean;
  loading: boolean;
}

function useSession(): SesssionReturn {
  const { loading, data } = useQuery(getUser);
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

  const loggedOut = data === undefined || data?.me === null;

  return {
    accessToken,
    loggedOut,
    loading,
  };
}

export default useSession;
