import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useSession from '@/hooks/useSession';

const NeedLogin: React.FC = ({ children }) => {
  const router = useRouter();
  const { isLoaded, loggedOut } = useSession();

  useEffect(() => {
    if (loggedOut && !isLoaded && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [loggedOut, router]);

  return <>{children}</>;
};
export default NeedLogin;
