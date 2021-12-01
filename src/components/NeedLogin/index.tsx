import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useSession from '@/hooks/useSession';

const NeedLogin: React.FC = ({ children }) => {
  const router = useRouter();
  const { loading, loggedOut, accessToken } = useSession();

  useEffect(() => {
    if (!loading && loggedOut && router.pathname !== '/login' && !accessToken) {
      router.push('/login');
    }
  }, [accessToken, loading, loggedOut, router]);

  return <>{children}</>;
};
export default NeedLogin;
